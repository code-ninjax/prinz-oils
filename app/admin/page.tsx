'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/Button';
import { Plus, Edit2, Trash2, LogOut, Users, BarChart } from 'lucide-react';

export default function AdminDashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'overview' | 'team'>('overview');
  const [team, setTeam] = useState<any[]>([]);
  
  // Form State
  const [isEditing, setIsEditing] = useState(false);
  const [currentMember, setCurrentMember] = useState<any>(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    description: '',
    image_url: '',
    linkedin_url: '',
    twitter_url: ''
  });

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isEditing && currentMember) {
      const { error } = await supabase
        .from('team_members')
        .update(formData)
        .eq('id', currentMember.id);
      
      if (!error) {
        fetchTeam();
        closeForm();
      } else {
        alert('Error updating member');
      }
    } else {
      const { error } = await supabase
        .from('team_members')
        .insert([formData]);
        
      if (!error) {
        fetchTeam();
        closeForm();
      } else {
        alert('Error adding member');
      }
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
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setIsEditing(false);
    setCurrentMember(null);
    setFormData({ name: '', role: '', description: '', image_url: '', linkedin_url: '', twitter_url: '' });
  };

  if (loading) return <div className="p-10">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-primary text-white hidden md:block">
        <div className="p-6">
          <h2 className="text-2xl font-bold">Prinz<span className="text-accent">Admin</span></h2>
        </div>
        <nav className="mt-6">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`w-full flex items-center px-6 py-3 text-left hover:bg-white/10 ${activeTab === 'overview' ? 'bg-white/10 border-r-4 border-accent' : ''}`}
          >
            <BarChart size={20} className="mr-3" /> Overview
          </button>
          <button 
            onClick={() => setActiveTab('team')}
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
             {/* Mobile menu toggle would go here */}
           </div>
        </div>

        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-gray-500 text-sm font-medium uppercase mb-2">Total Visits</h3>
              <p className="text-3xl font-bold text-primary">1,245</p>
              <span className="text-green-500 text-sm font-medium">+12% this week</span>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-gray-500 text-sm font-medium uppercase mb-2">Page Views</h3>
              <p className="text-3xl font-bold text-primary">3,890</p>
              <span className="text-green-500 text-sm font-medium">+5% this week</span>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-gray-500 text-sm font-medium uppercase mb-2">Active Team</h3>
              <p className="text-3xl font-bold text-primary">{team.length > 0 ? team.length : 6}</p>
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
                        No team members found (or DB not connected). <br/>
                        <span className="text-xs">Add one to start, or check connection.</span>
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
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                  <input type="text" value={formData.image_url} onChange={e => setFormData({...formData, image_url: e.target.value})} className="w-full px-4 py-2 border rounded-md" placeholder="https://..." />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn URL</label>
                  <input type="text" value={formData.linkedin_url} onChange={e => setFormData({...formData, linkedin_url: e.target.value})} className="w-full px-4 py-2 border rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Twitter URL</label>
                  <input type="text" value={formData.twitter_url} onChange={e => setFormData({...formData, twitter_url: e.target.value})} className="w-full px-4 py-2 border rounded-md" />
                </div>
                <div className="flex gap-4 mt-6">
                  <Button type="submit" className="flex-1">Save</Button>
                  <Button type="button" variant="outline" onClick={closeForm} className="flex-1">Cancel</Button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
