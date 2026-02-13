'use client';

import { useEffect, useState, useRef } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/Button';
import { Plus, Edit2, Trash2, LogOut, Users, BarChart, Upload, X, Loader2, Menu } from 'lucide-react';

export default function AdminDashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'overview' | 'team'>('overview');
  const [team, setTeam] = useState<any[]>([]);
  
  // Form State
  const [isEditing, setIsEditing] = useState(false);
  const [currentMember, setCurrentMember] = useState<any>(null);
  const [showForm, setShowForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    description: '',
    image_url: '',
    linkedin_url: '',
    twitter_url: ''
  });

  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    checkUser();
    fetchTeam();
  }, []);

  const checkUser = () => {
    const isAuth = localStorage.getItem('prinz-admin-auth');
    if (!isAuth) {
      router.push('/admin/login');
      return;
    }
    setLoading(false);
  };

  const fetchTeam = async () => {
    const { data, error } = await supabase.from('team_members').select('*').order('id');
    if (data) setTeam(data);
  };

  const handleLogout = () => {
    localStorage.removeItem('prinz-admin-auth');
    router.push('/admin/login');
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this member?')) return;
    
    const { error } = await supabase.from('team_members').delete().eq('id', id);
    if (!error) fetchTeam();
    else alert('Error deleting member');
  };

  // Upload image to Supabase Storage
  const uploadImage = async (file: File): Promise<string | null> => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
    const filePath = `team/${fileName}`;

    const { error } = await supabase.storage
      .from('team-images')
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false,
      });

    if (error) {
      console.error('Upload error:', error);
      return null;
    }

    const { data: urlData } = supabase.storage
      .from('team-images')
      .getPublicUrl(filePath);

    return urlData.publicUrl;
  };

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImageFile(file);

    // Create preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setImageFile(null);
    setImagePreview(null);
    setFormData({ ...formData, image_url: '' });
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      let finalImageUrl = formData.image_url;

      // If there's a new image file, upload it
      if (imageFile) {
        const uploadedUrl = await uploadImage(imageFile);
        if (!uploadedUrl) {
          alert('Failed to upload image. Please try again.');
          setSubmitting(false);
          return;
        }
        finalImageUrl = uploadedUrl;
      }

      const dataToSave = { ...formData, image_url: finalImageUrl };

      if (isEditing && currentMember) {
        const { error } = await supabase
          .from('team_members')
          .update(dataToSave)
          .eq('id', currentMember.id);
        
        if (!error) {
          fetchTeam();
          closeForm();
        } else {
          alert('Error updating member: ' + error.message);
        }
      } else {
        const { error } = await supabase
          .from('team_members')
          .insert([dataToSave]);
          
        if (!error) {
          fetchTeam();
          closeForm();
        } else {
          alert('Error adding member: ' + error.message);
        }
      }
    } catch (err: any) {
      alert('An error occurred: ' + err.message);
    } finally {
      setSubmitting(false);
    }
  };

  const openEdit = (member: any) => {
    setIsEditing(true);
    setCurrentMember(member);
    setFormData({
      name: member.name,
      role: member.role,
      description: member.description || '',
      image_url: member.image_url || '',
      linkedin_url: member.linkedin_url || '',
      twitter_url: member.twitter_url || ''
    });
    setImageFile(null);
    setImagePreview(member.image_url || null);
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setIsEditing(false);
    setCurrentMember(null);
    setImageFile(null);
    setImagePreview(null);
    setFormData({ name: '', role: '', description: '', image_url: '', linkedin_url: '', twitter_url: '' });
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  if (loading) return <div className="p-10">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-100 flex relative">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed md:static inset-y-0 left-0 w-64 bg-primary text-white z-50 transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold">Prinz<span className="text-accent">Admin</span></h2>
          <button className="md:hidden" onClick={() => setSidebarOpen(false)}>
            <X size={24} />
          </button>
        </div>
        <nav className="mt-6">
          <button 
            onClick={() => { setActiveTab('overview'); setSidebarOpen(false); }}
            className={`w-full flex items-center px-6 py-3 text-left hover:bg-white/10 ${activeTab === 'overview' ? 'bg-white/10 border-r-4 border-accent' : ''}`}
          >
            <BarChart size={20} className="mr-3" /> Overview
          </button>
          <button 
            onClick={() => { setActiveTab('team'); setSidebarOpen(false); }}
            className={`w-full flex items-center px-6 py-3 text-left hover:bg-white/10 ${activeTab === 'team' ? 'bg-white/10 border-r-4 border-accent' : ''}`}
          >
            <Users size={20} className="mr-3" /> Team Management
          </button>
        </nav>
        <div className="absolute bottom-0 w-64 p-6">
          <button onClick={handleLogout} className="flex items-center text-gray-400 hover:text-white">
            <LogOut size={20} className="mr-2" /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="flex justify-between items-center mb-8">
           <h1 className="text-3xl font-bold text-gray-800">
             {activeTab === 'overview' ? 'Dashboard Overview' : 'Team Management'}
           </h1>
           <div className="md:hidden">
             <button 
               onClick={() => setSidebarOpen(true)}
               className="p-2 text-gray-600 hover:bg-gray-200 rounded-lg transition-colors"
             >
               <Menu size={24} />
             </button>
           </div>
        </div>

        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-gray-500 text-sm font-medium uppercase mb-2">Team Members</h3>
              <p className="text-3xl font-bold text-primary">{team.length}</p>
            </div>
          </div>
        )}

        {activeTab === 'team' && (
          <div>
            <div className="flex justify-end mb-6">
              <Button onClick={() => setShowForm(true)} className="flex items-center gap-2">
                <Plus size={18} /> Add Member
              </Button>
            </div>

            {/* Team List */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {team.length === 0 ? (
                    <tr>
                      <td colSpan={3} className="px-6 py-4 text-center text-gray-500">
                        No team members found. <br/>
                        <span className="text-xs">Click &quot;Add Member&quot; to get started.</span>
                      </td>
                    </tr>
                  ) : (
                    team.map((member) => (
                      <tr key={member.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            {member.image_url && (
                              <img className="h-10 w-10 rounded-full object-cover mr-3" src={member.image_url} alt="" />
                            )}
                            <div className="text-sm font-medium text-gray-900">{member.name}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{member.role}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button onClick={() => openEdit(member)} className="text-indigo-600 hover:text-indigo-900 mr-4">
                            <Edit2 size={18} />
                          </button>
                          <button onClick={() => handleDelete(member.id)} className="text-red-600 hover:text-red-900">
                            <Trash2 size={18} />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Modal Form */}
        {showForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-lg w-full p-6 max-h-[90vh] overflow-y-auto">
              <h2 className="text-2xl font-bold mb-6">{isEditing ? 'Edit Member' : 'Add New Member'}</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-2 border rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                  <input required type="text" value={formData.role} onChange={e => setFormData({...formData, role: e.target.value})} className="w-full px-4 py-2 border rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea rows={3} value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} className="w-full px-4 py-2 border rounded-md" />
                </div>

                {/* Image Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Photo</label>
                  
                  {imagePreview ? (
                    <div className="relative w-full h-48 rounded-lg overflow-hidden border border-gray-200 mb-2">
                      <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                      <button 
                        type="button" 
                        onClick={removeImage}
                        className="absolute top-2 right-2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-gray-500 hover:text-red-500 shadow-md transition-colors"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ) : (
                    <div 
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full h-48 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-accent hover:bg-accent/5 transition-all"
                    >
                      <Upload size={32} className="text-gray-400 mb-3" />
                      <p className="text-sm text-gray-500 font-medium">Click to upload photo</p>
                      <p className="text-xs text-gray-400 mt-1">JPG, PNG, WebP</p>
                    </div>
                  )}
                  
                  <input 
                    ref={fileInputRef}
                    type="file" 
                    accept="image/*"
                    onChange={handleImageSelect}
                    className="hidden"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn URL <span className="text-gray-400 font-normal">(Optional)</span></label>
                  <input type="text" value={formData.linkedin_url} onChange={e => setFormData({...formData, linkedin_url: e.target.value})} className="w-full px-4 py-2 border rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Twitter URL <span className="text-gray-400 font-normal">(Optional)</span></label>
                  <input type="text" value={formData.twitter_url} onChange={e => setFormData({...formData, twitter_url: e.target.value})} className="w-full px-4 py-2 border rounded-md" />
                </div>
                <div className="flex gap-4 mt-6">
                  <Button type="submit" className="flex-1" disabled={submitting}>
                    {submitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader2 size={16} className="animate-spin" /> Saving...
                      </span>
                    ) : 'Save'}
                  </Button>
                  <Button type="button" variant="outline" onClick={closeForm} className="flex-1" disabled={submitting}>Cancel</Button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
