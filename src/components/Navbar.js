import React from 'react';
import { Menu } from 'antd';
import { useState } from 'react';

const items = [
    {
        label: (
            <a href="/">
              Home
            </a>
          ),
        key: 'home',
    },
    {
        label: (
            <a href="/schedule">
              Schedule
            </a>
          ),
        key: 'schedule',
    },
    {
        label: (
            <a href="/results">
              Results
            </a>
          ),
        key: 'results',
    },
    {
        label: (
            <a href="/drivers">
              Drivers
            </a>
          ),
        key: 'drivers',
    },
    {
        label: (
            <a href="/teams">
              Teams
            </a>
          ),
        key: 'teams',
    }
]

const Navbar = () => {
    const [current, setCurrent] = useState();
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return (
        <div style={{ position: "relative"}}>
            <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items}
                style={{ color: "#3A1212", backgroundColor: "red" }}
            />
        </div>
    )
}

export default Navbar