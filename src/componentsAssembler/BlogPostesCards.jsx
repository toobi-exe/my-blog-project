import React from 'react'
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
const BlogPostesCards = ({ index, data, onDelete }) => {
    const { title, detail, date } = data;
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle className="text-lg">
                    {index}. {title}
                </CardTitle>
                <CardDescription className="text-sm text-gray-500">
                    Submitted on: {date}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-gray-700">{detail}</p>
            </CardContent>
            <CardFooter className="flex justify-end">
                <Button variant="destructive" onClick={onDelete}>
                    Delete
                </Button>
            </CardFooter>
        </Card>

    )
}

export default BlogPostesCards