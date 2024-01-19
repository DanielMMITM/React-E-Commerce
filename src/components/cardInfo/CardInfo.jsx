import './CardInfo.css'

export function CardInfo({ title, icon, text}) {
    return (
        <div>
            <div className='card'>
                <div className='iconContainer'>
                    <img src={icon} alt="" />
                </div>
                <div className='info'>
                    <h2>{title}</h2>
                    <span>{text}</span>
                </div>
            </div>
        </div>
    )
}