import React, { useState, useEffect } from 'react';
import { User, Lock, ArrowRight, AlertCircle, CheckCircle2, CheckSquare, Square } from 'lucide-react';

const LoginPage = ({ onLogin }) => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [rememberMe, setRememberMe] = useState(false);
    const [staySignedIn, setStaySignedIn] = useState(false);
    const [showRecovery, setShowRecovery] = useState(false);
    const [recoveryData, setRecoveryData] = useState({
        mssqlPassword: '',
        newAdminPassword: ''
    });
    const [recoveryStatus, setRecoveryStatus] = useState(null);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        // Load remembered user
        const savedUser = localStorage.getItem('rememberedUser');
        if (savedUser) {
            setFormData(prev => ({ ...prev, username: savedUser }));
            setRememberMe(true);
        }
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const res = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || 'Login failed');
            }

            setSuccess(true);

            // Handle Persistence
            if (rememberMe) {
                localStorage.setItem('rememberedUser', formData.username);
            } else {
                localStorage.removeItem('rememberedUser');
            }

            if (staySignedIn) {
                localStorage.setItem('currentUser', JSON.stringify(data.user));
            } else {
                sessionStorage.setItem('currentUser', JSON.stringify(data.user));
            }

            setTimeout(() => {
                onLogin(data.user.username);
            }, 800);

        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#020b1c] flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse-slow"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-emerald-600/10 rounded-full blur-[120px] animate-pulse-slow delay-1000"></div>

            <div className="w-full max-w-md relative z-10">
                <div className="text-center mb-8">
                    <img src="/logo-header.png" alt="SSMC" className="h-16 mx-auto mb-4 object-contain" />
                    <h1 className="text-2xl font-bold text-white tracking-wide">Secure Access</h1>
                    <p className="text-slate-400 text-sm">Sign in to access the dashboard</p>
                </div>

                <div className="glass-panel p-8 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xl bg-[#0f172a]/40">
                    <form onSubmit={handleSubmit} className="space-y-6">

                        {error && (
                            <div className="p-3 bg-rose-500/10 border border-rose-500/20 rounded-xl flex items-center gap-3 text-rose-400 text-sm animate-fade-in">
                                <AlertCircle size={18} />
                                <span>{error}</span>
                            </div>
                        )}

                        {success && (
                            <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center gap-3 text-emerald-400 text-sm animate-fade-in">
                                <CheckCircle2 size={18} />
                                <span>Login successful! Redirecting...</span>
                            </div>
                        )}

                        <div className="space-y-4">
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500 group-focus-within:text-blue-400 transition-colors">
                                    <User size={18} />
                                </div>
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Username"
                                    required
                                    className="w-full bg-[#020b1c]/50 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                                    value={formData.username}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500 group-focus-within:text-blue-400 transition-colors">
                                    <Lock size={18} />
                                </div>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    required
                                    className="w-full bg-[#020b1c]/50 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        {/* Checkboxes */}
                        <div className="flex flex-col gap-3">
                            <label className="flex items-center gap-2 cursor-pointer group text-sm text-slate-400 hover:text-white transition-colors">
                                <button
                                    type="button"
                                    onClick={() => setRememberMe(!rememberMe)}
                                    className="text-blue-500 focus:outline-none"
                                >
                                    {rememberMe ? <CheckSquare size={18} /> : <Square size={18} />}
                                </button>
                                <span onClick={() => setRememberMe(!rememberMe)}>Remember Me (Username)</span>
                            </label>

                            <label className="flex items-center gap-2 cursor-pointer group text-sm text-slate-400 hover:text-white transition-colors">
                                <button
                                    type="button"
                                    onClick={() => setStaySignedIn(!staySignedIn)}
                                    className="text-blue-500 focus:outline-none"
                                >
                                    {staySignedIn ? <CheckSquare size={18} /> : <Square size={18} />}
                                </button>
                                <span onClick={() => setStaySignedIn(!staySignedIn)}>Stay Signed In</span>
                            </label>
                        </div>

                        <div className="flex items-center justify-between mb-2 mt-4">
                            <button
                                type="button"
                                onClick={() => setShowRecovery(true)}
                                className="text-sm text-blue-400 hover:text-blue-300 transition-colors focus:outline-none"
                            >
                                Forgot Password?
                            </button>
                        </div>

                        <button
                            type="submit"
                            disabled={loading || success}
                            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? (
                                <span className="animate-pulse">Signing in...</span>
                            ) : success ? (
                                <span>Success!</span>
                            ) : (
                                <>
                                    Sign In
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
            {/* Recovery Modal */}
            {showRecovery && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
                    <div className="bg-[#0f172a] border border-white/10 rounded-2xl w-full max-w-md p-6 shadow-2xl relative">
                        <button
                            onClick={() => setShowRecovery(false)}
                            className="absolute top-4 right-4 text-slate-400 hover:text-white"
                        >
                            ✕
                        </button>

                        <h2 className="text-xl font-bold text-white mb-2">Admin Recovery</h2>
                        <p className="text-slate-400 text-sm mb-6">
                            Enter the <strong>MSSQL Administrator Credentials</strong> to reset the dashboard admin password.
                        </p>

                        <form onSubmit={async (e) => {
                            e.preventDefault();
                            setLoading(true);
                            setRecoveryStatus(null);
                            try {
                                const res = await fetch('/api/auth/recovery', {
                                    method: 'POST',
                                    headers: { 'Content-Type': 'application/json' },
                                    body: JSON.stringify(recoveryData)
                                });
                                const data = await res.json();
                                if (res.ok) {
                                    setRecoveryStatus({ success: true, message: data.message });
                                    setTimeout(() => setShowRecovery(false), 2000);
                                } else {
                                    setRecoveryStatus({ success: false, message: data.error });
                                }
                            } catch (err) {
                                setRecoveryStatus({ success: false, message: 'Recovery failed. Check network.' });
                            } finally {
                                setLoading(false);
                            }
                        }} className="space-y-4">

                            {recoveryStatus && (
                                <div className={`p-3 rounded-xl text-sm border ${recoveryStatus.success ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-rose-500/10 border-rose-500/20 text-rose-400'}`}>
                                    {recoveryStatus.message}
                                </div>
                            )}

                            <div>
                                <label className="block text-xs font-medium text-slate-400 mb-1">Database Config Password (sa/Administrator)</label>
                                <input
                                    type="password"
                                    required
                                    className="w-full bg-black/50 border border-white/10 rounded-lg p-2.5 text-white focus:border-blue-500 transition-colors"
                                    value={recoveryData.mssqlPassword}
                                    onChange={e => setRecoveryData({ ...recoveryData, mssqlPassword: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-slate-400 mb-1">New App Admin Password</label>
                                <input
                                    type="password"
                                    required
                                    className="w-full bg-black/50 border border-white/10 rounded-lg p-2.5 text-white focus:border-blue-500 transition-colors"
                                    value={recoveryData.newAdminPassword}
                                    onChange={e => setRecoveryData({ ...recoveryData, newAdminPassword: e.target.value })}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-rose-600 hover:bg-rose-500 text-white font-bold py-3 rounded-xl transition-colors disabled:opacity-50 mt-2"
                            >
                                {loading ? 'Verifying...' : 'Reset Admin Password'}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LoginPage;
