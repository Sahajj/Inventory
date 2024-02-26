import LongMenu from './DotButton'
import * as React from 'react';
interface List {
    id: number,
    name: string,
    Address: {
        street: string;
        city: string;
        state: string;
        postalCode: string;
        country: string;
    },
    owner: string,
    email: string,
    phone: number,
    description?: string
}

export default function ListOfItems({}) {
    
    
    const Arr: List[] = [
        {
            id: 1,
            name: "Fashion Hub",
            Address: {
                street: "456 Fashion Ave",
                city: "Metropolis",
                state: "Fashion State",
                postalCode: "54321",
                country: "Fashionland"
            },
            owner: "Alice Smith",
            email: "fashionhub@example.com",
            phone: 9876543210,
            description: "Your one-stop shop for the latest fashion trends."
        },
        {
            id: 2,
            name: "Tech Haven",
            Address: {
                street: "789 Tech Blvd",
                city: "Techville",
                state: "Tech State",
                postalCode: "67890",
                country: "Techland"
            },
            owner: "Bob Johnson",
            email: "techhaven@example.com",
            phone: 1112223333,
            description: "Your go-to destination for all things tech."
        },
        {
            id: 3,
            name: "Dummy Shop",
            Address: {
                street: "123 Main St",
                city: "Dummyville",
                state: "Dummy State",
                postalCode: "12345",
                country: "Dummyland"
            },
            owner: "John Doe",
            email: "dummy@example.com",
            phone: 1234567890,
            description: "This is a dummy shop used for testing purposes."
        },
        {
            id: 3,
            name: "Dummy Shop",
            Address: {
                street: "123 Main St",
                city: "Dummyville",
                state: "Dummy State",
                postalCode: "12345",
                country: "Dummyland"
            },
            owner: "John Doe",
            email: "dummy@example.com",
            phone: 1234567890,
            description: "This is a dummy shop used for testing purposes."
        },
        {
            id: 3,
            name: "Dummy Shop",
            Address: {
                street: "123 Main St",
                city: "Dummyville",
                state: "Dummy State",
                postalCode: "12345",
                country: "Dummyland"
            },
            owner: "John Doe",
            email: "dummy@example.com",
            phone: 1234567890,
            description: "This is a dummy shop used for testing purposes."
        },
        {
            id: 3,
            name: "Dummy Shop",
            Address: {
                street: "123 Main St",
                city: "Dummyville",
                state: "Dummy State",
                postalCode: "12345",
                country: "Dummyland"
            },
            owner: "John Doe",
            email: "dummy@example.com",
            phone: 1234567890,
            description: "This is a dummy shop used for testing purposes."
        },
        {
            id: 3,
            name: "Dummy Shop",
            Address: {
                street: "123 Main St",
                city: "Dummyville",
                state: "Dummy State",
                postalCode: "12345",
                country: "Dummyland"
            },
            owner: "John Doe",
            email: "dummy@example.com",
            phone: 1234567890,
            description: "This is a dummy shop used for testing purposes."
        },        {
            id: 3,
            name: "Dummy Shop",
            Address: {
                street: "123 Main St",
                city: "Dummyville",
                state: "Dummy State",
                postalCode: "12345",
                country: "Dummyland"
            },
            owner: "John Doe",
            email: "dummy@example.com",
            phone: 1234567890,
            description: "This is a dummy shop used for testing purposes."
        }
    
    ];

    return <>
    <div className="pl-4 pr-4 ">        
            <div>
                 {Arr.map(shopList => <Shop key={shopList.id} shopList={shopList} />)} 
            </div>
        </div>
    </>
}

function Shop({ shopList }: { shopList: List }) {
    return (
        <div className="flex justify-between p-4 border-2">
            <div className="flex">
                <div className="flex flex-col justify-center h-full">
                    <div className="text-2xl">
                        {shopList.name}
                    </div>
                    <div className="text-lg">
                        {shopList.owner}
                    </div>
                    <div className="text-lg">
                        {shopList.description}
                    </div>
                    <div className="text-lg">
                        {shopList.phone}
                    </div>
                </div>
            </div>
            <div>
            <LongMenu/>
            </div>
            
        </div>
    );
}

