import './CardInfo.css'

export const CardInfo = ({ title, icon, text }) => {
    return (
        <div className='card col-sm-4 flex-grow-1 w-25'>
            <div className='h-100'>
                <div className='iconColor'>
                    <img src={icon} className='card-img-top img-fluid w-50 mx-auto d-block'/>
                </div>
                <div className='card-body'>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{text}</p>
                </div>
            </div>
        </div>
    );
};

export default CardInfo;
