import React, { useEffect, useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Badge, Dropdown, Space, Table } from 'antd';


const ExpandedRowRender = ({ dataSource }) => {
    const columns = [
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Url',
            dataIndex: 'url',
            key: 'url',
        }
    ];
    const [data, setData] = useState([]);
    /*for (let i = 0; i < 3; ++i) {
        data.push({
            key: i.toString(),
            date: '2014-12-24 23:12:00',
            name: '/polos',
            upgradeNum: 'Upgraded: 56',
        });
    }
*/
    useEffect(() => {
        console.log("dataSource", dataSource)
        setData([{
            key: 1111,
            date: '2014-12-24 23:12:00',
            url: '/polos',
        }, {
            key: 1111,
            date: '2014-12-24 23:12:00',
            url: '/polos/polos-mujer',
        }, {
            key: 1111,
            date: '2014-12-24 23:12:00',
            url: '/polos/polos-mujer/producto-skuui',
        }])
    }, [])

    return <Table columns={columns} dataSource={data} pagination={false} />;
};

const expandedRowRender = ({ columns, data }) => {
    return <ExpandedRowRender columns={columns} dataSource={data} pagination={false} />;
};

const TableUserNavigation = () => {

    const columns = [
        {
            title: 'User Id',
            dataIndex: 'name',
            key: 'name',
        }
    ];



    const data = [];
    for (let i = 0; i < 10; ++i) {
        data.push({
            key: i.toString(),
            name: '515151',
            platform: 'iOS',
            version: '10.3.4.5654',
            upgradeNum: 500,
            creator: 'Jack',
            createdAt: '2014-12-24 23:12:00',
        });
    }
    return (
        <div className='overflow-scroll' >
            <Table
                columns={columns}
                expandable={{
                    expandedRowRender,
                    defaultExpandedRowKeys: ['0'],
                }}
                dataSource={data}
                size="small"
            />
        </div>
    );
};
export default TableUserNavigation;