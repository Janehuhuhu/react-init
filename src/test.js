import React, { useEffect, useRef } from 'react';
export default function Demo() {
    const appRef = useRef();
    const btnRef = useRef();

    useEffect(() => {
        window.addEventListener('click', function () {
            console.log('window click')
        })
        document.addEventListener('click', function () {
            console.log('document click')
        })
        btnRef.current.addEventListener('click', function () {
            console.log('btn click');
        })
        appRef.current.addEventListener('click', function () {
            console.log('app click');
        })
    }, []);

    function onBtnClick(e) {
      // e.stopPropagation()
      e.nativeEvent.stopImmediatePropagation()
        console.log('react button click');
    }

    function onAppClick(e) {
        console.log('react app click');
    }

    return (
        <div className="App" ref={appRef} onClick={onAppClick}>
            <button ref={btnRef} onClick={onBtnClick}>按钮</button>
        </div>
    )
}