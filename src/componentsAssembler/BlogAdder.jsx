import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'



const BlogAdder = ({ addFormData }) => {
    const date = new Date()
    const todayDate = date.toLocaleDateString()
    const [input, setInput] = useState({
        title: '',
        detail: '',
        date: todayDate
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput((prevInput) => ({

            ...prevInput,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        console.log("it works");
        e.preventDefault();

        if (input.title.trim() && input.detail.trim()) {
            addFormData(input);
            setInput({ title: '', detail: '' });
            navigate('/');
        }
        else {
            alert('some fields are empty!')
        }
    };




    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <Card className="w-[550px]">
                    <CardHeader>
                        <CardTitle className="uppercase text-center">You think</CardTitle>
                        <CardDescription className="uppercase text-center">and i keep</CardDescription>
                    </CardHeader>
                    <form onSubmit={handleSubmit}>
                        <CardContent>

                            <div className="grid w-full items-center gap-4">
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="title" className="uppercase text-center">title</Label>
                                    <Input name="title" value={input.title} id="title" placeholder="Title for this post" onChange={handleChange} />
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="details" className="uppercase text-center">details</Label>
                                    <Textarea name="detail" value={input.detail} placeholder="Share your thoughts..." onChange={handleChange}></Textarea>
                                </div>
                            </div>

                        </CardContent>
                        <CardFooter className='flex items-center justify-between    '>
                            <Button type='submit' className="rounded uppercase hover:bg-zinc-700 hover:text-slate-300">post</Button>
                            <p className="uppercase">{todayDate}</p>
                        </CardFooter>
                    </form>
                </Card>
            </div>
        </>
    )
}

export default BlogAdder