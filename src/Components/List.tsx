import * as React from 'react';
import { List } from "../Pages/ShopDashboard";
import LongMenu from '../Components/DotButton';

interface ListOfItemsProps {
    list: List[];
    onDelete: (listId?: number) => void;
    onEdit: (list : List) => void;
    onNavigateToProducts: (listId?: number) => void;
}

const ListOfShop: React.FC<ListOfItemsProps> = ({ list, onDelete, onEdit, onNavigateToProducts }) => {
    if (!list || list.length === 0) {
        return <div>No Shop available</div>;
    }

    const handelEdit = (List: List) => {
        onEdit(List);
    }

    const handelDelete = (ListId?: number) => {
        onDelete(ListId);
    }

    const handelNavigateToProducts = (ListId?: number) => {
        onNavigateToProducts(ListId);
    }

    React.useEffect(() => {
    }, [list]);

    return (
        <>
            <div className="pl-4 pr-4 ">
                <div>
                    {list.map(shopList => <Shop 
                        key={shopList.id}
                        shopList={shopList}
                        onEdit={() => handelEdit(shopList)}
                        onDelete={() => handelDelete(shopList.id)}
                        onNavigateToProducts={() => handelNavigateToProducts(shopList.id)}
                        />)}
                </div>
            </div>
        </>
    );
}

function Shop({ shopList, onEdit, onDelete, onNavigateToProducts }: { shopList: List; onEdit: () => void; onDelete: () => void; onNavigateToProducts: () => void; }) {
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
                {/* Assuming LongMenu component is used here */}
                <LongMenu 
                    onEdit={onEdit}
                    onDelete={onDelete}
                    onNavigateToProducts={onNavigateToProducts}/>
            </div>
        </div>
    );
}

export default ListOfShop;