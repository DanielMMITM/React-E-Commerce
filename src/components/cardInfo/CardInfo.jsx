import './CardInfo.css'

export const CardInfo = ({ title, icon, text }) => {
    return (
        <div>
            <div className='card'>
                <div className='iconContainer'>
                    <img src={icon} className='icon' />
                </div>
                <div className='info'>
                    <h2>{title}</h2>
                    <span>{text}</span>
                </div>
            </div>
        </div>
    );
};