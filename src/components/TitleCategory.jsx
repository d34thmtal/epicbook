import React from 'react';
import { useParams } from 'react-router-dom';

export default function TitleCategory() {
    const { category } = useParams();

    return <div>{category} books</div>;
}