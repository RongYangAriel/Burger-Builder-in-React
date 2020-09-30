import React from 'react';

const layout = (props) => {
    <div>
        Toolbar, SodeDrawer,Backdrop 
        <main>
            {props.children}
        </main>
    </div>
}