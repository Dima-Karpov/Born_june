import React from 'react'
import Message from './Message'

const messageData = {
    avatar: 'https://steamuserimages-a.akamaihd.net/ugc/772863840223603020/AAAF98AA16C0AFAF36AB2D8B2F1D3FAE48FF7F71/?imw=512&amp;imh=384&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true',
    name: 'Артем',
    message: 'npm start нажимал?',
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <hr />
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />



            <hr />
            {/*для личного творчества, могу проверить*/}
            {/* <AlternativeMessage/> */}
            <hr />
        </div>
    )
}

export default HW1
