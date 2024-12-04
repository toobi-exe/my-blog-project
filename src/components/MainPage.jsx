import BlogPostesCards from '@/componentsAssembler/BlogPostesCards';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage = ({ formData }) => {
    const navigate = useNavigate();
    const handleDelete = (index) => {
        setFormData((prevData) => prevData.filter((_, i) => i !== index)); // its not working yet !!!
    };
    return (
        <div className="p-4">
            <div className="flex justify-center mt-4">
                <button onClick={() => navigate('/form')} className="mt-4 p-2 border border-slate-800 uppercase">
                    wanna add something ...
                </button>
            </div>
            <h1 className="text-2xl font-bold mb-4">Main Blog</h1>
            {formData.length > 0 ? (
                <div className="data-list space-y-4 grid grid-rows-3">
                    {formData.map((data, index) => (
                        <BlogPostesCards key={index}
                            index={index + 1}
                            data={data}
                            onDelete={() => handleDelete(index)} />
                    ))}
                </div>
            ) : (
                <p>Share with me.</p>
            )}

        </div>
    );
};

export default MainPage;
