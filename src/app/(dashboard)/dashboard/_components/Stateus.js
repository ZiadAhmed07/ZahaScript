'use client'

import { Domin } from '@/api/data'
import axios from 'axios'
import { getCookie } from 'cookies-next'
import { useEffect, useState } from 'react'

export default function Status() {
    const [data, setData] = useState(null);
    const [state, setState] = useState({
        Users: 0,
        Comments: 0,
        Contacts: 0,
        Jobs: 0,
        Orders: 0,
        Teams: 0,
        Projects: 0,
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userData = JSON.parse(getCookie('userData'));
                const response = await axios.get(`${Domin}/api/admin/showAll/statistics`, {
                    headers: {
                        'Authorization': `Bearer ${userData.token}`
                    }
                });
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (data) {
            setState({
                Users: data.Users_count,
                Comments: data.Comments_count,
                Contacts: data.Contacts_count,
                Jobs: data.Jobs_count,
                Orders: data.Orders_count,
                Teams: data.Teams_count,
                Projects: data.Projects_count
            });
        }
    }, [data]);

    function checkData() {
        if (data) {
            console.log(data)
            return (
                <div className='w-full h-full flex items-end justify-around pr-[50px] pb-[50px]'>
                    <div className={`w-[50px] transition-all h-[${state.Users * 10}px] bg-yellow-500`}></div>
                    <div className={`w-[50px] transition-all h-[${state.Comments * 10}px] bg-orange-500`}></div>
                    <div className={`w-[50px] transition-all h-[${state.Contacts * 10}px] bg-pink-500`}></div>
                    <div className={`w-[50px] transition-all h-[${state.Jobs * 10}px] bg-green-600`}></div>
                    <div className={`w-[50px] transition-all h-[${state.Orders * 10}px] bg-blue-500`}></div>
                    <div className={`w-[50px] transition-all h-[${state.Teams * 10}px] bg-red-500`}></div>
                    <div className={`w-[50px] transition-all h-[${state.Projects * 10}px] bg-purple-500`}></div>
                </div>
            )
        }
    }

    return (
        <div className='w-full overflow-auto'>
            <div className='min-w-[750px] relative'>
                <div className='w-[50px] h-[400px] border-l-4 border-solid border-gray-700 flex flex-col-reverse items-center justify-between'>
                    {[0, 5, 10, 15, 20, 25, 30, 35, 40].map((value) => (
                        <p key={value}>{value}</p>
                    ))}
                </div>
                <div className='w-full h-[50px] border-t-4 border-solid border-gray-700 flex items-center justify-around gap-1 pr-[50px]'>
                    <p className='w-[50px] text-center font-bold'>المستخدمين</p>
                    <p className='w-[50px] text-center font-bold'>التعليقات</p>
                    <p className='w-[50px] text-center font-bold'>الرسائل</p>
                    <p className='w-[50px] text-center font-bold'>الوظائف</p>
                    <p className='w-[50px] text-center font-bold'>الطلبات</p>
                    <p className='w-[50px] text-center font-bold'>الفريق</p>
                    <p className='w-[50px] text-center font-bold'>المشاريع</p>
                </div>
                <div className="absolute top-0 w-full h-full overflow-hidden">
                    <div className='h-full w-full absolute right-[50px]'>
                        {[...Array(8)].map((_, index) => (
                            <div key={index} className='border-t-[1px] border-gray-800 h-[50px]'></div>
                        ))}
                    </div>
                    {checkData()}
                </div>
            </div>
        </div>
    );
}
