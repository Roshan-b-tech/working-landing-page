import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { useDebounce } from '../hooks/useDebounce';
import type { User } from '../types';

export const UserSearch: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  
  const debouncedSearch = useDebounce(searchTerm, 300);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
        setFilteredUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    if (debouncedSearch) {
      const searchLower = debouncedSearch.toLowerCase();
      const filtered = users.filter(user =>
        user.name.toLowerCase().includes(searchLower)
      );
      setFilteredUsers(filtered);
    } else {
      setFilteredUsers(users);
    }
  }, [debouncedSearch, users]);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Our Clients</h2>
        
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search clients..."
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {loading ? (
          <div className="text-center">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredUsers.map((user, index) => (
              <div key={user.id} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={`https://images.unsplash.com/photo-${[
                      '1472099645785-5658abf4ff4e',
                      '1494790108377-be9c29b29330',
                      '1507003211169-0a1dd7228f2d',
                      '1500648767791-00dcc994a43e',
                      '1534528741775-53994a69daeb',
                      '1438761681033-6461ffad8d80',
                      '1539571696357-5a69c17a67c6',
                      '1517841905240-472988babdf9',
                      '1488161628813-04466f872be2',
                      '1526800544336-d04f0cbfd700'
                    ][index]}?auto=format&fit=crop&w=100&h=100&q=80`}
                    alt={user.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{user.name}</h3>
                    <p className="text-gray-600">{user.company.name}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-gray-500 flex items-center gap-2">
                    {user.email}
                  </p>
                  <p className="text-sm text-gray-500 italic">
                    "{user.company.catchPhrase}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};