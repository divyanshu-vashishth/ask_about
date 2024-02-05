// import { useState } from 'react';
// import { supabase } from '../utils/supabaseClient';

const RegisterPage = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [username, setUsername] = useState('');

    const handleRegister = async () => {
    //     if (password !== confirmPassword) {
    //         alert('Passwords do not match');
    //         return;
    //     }

    //     const { user, error } = await supabase.auth.signUp({
    //         email,
    //         password,
    //     });

    //     if (error) {
    //         alert(error.message);
    //         return;
    //     }

    //     // Store additional user details in Supabase table
    //     const { data, error: profileError } = await supabase
    //         .from('users')
    //         .insert([{ name, email, username }])
    //         .single();

    //     if (profileError) {
    //         alert(profileError.message);
    //         return;
    //     }

    //     console.log('User registered:', user);
    };
    let name,email,password,confirmPassword,username;

    return (
        <div>
            <h1>Register Page</h1>
            <input
                type="text"
                placeholder="Name"
                value={name}
                // onChange={(e) => setName(e.target.value)}
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                // onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                // onChange={(e) => setPassword(e.target.value)}
            />
            <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                // onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <input
                type="text"
                placeholder="Username"
                value={username}
                // onChange={(e) => setUsername(e.target.value)}
            />
            <button 
            // onClick={handleRegister}
            >Register</button>
        </div>
    );
};

export default RegisterPage;