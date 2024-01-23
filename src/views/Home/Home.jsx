import {
    Button,
    CardInfo
} from '/src/components';
import './Home.css'
import categoryImg from '/src/assets/img/clothes.jpg';
import car from '/src/assets/icons/car.png';
import money from '/src/assets/icons/money.png';
import privacy from '/src/assets/icons/privacy.png';
import { useMemo } from 'react';
import mainImage from '/src/assets/img/adxbig3.jpg';

export function Home() {
    useMemo(() => {
        window.scrollTo({ top: 0 });
    }, []);
    return (
        <>
            <header>
                <div class="card text-bg-dark">
                    <img src={mainImage} className='image-fluid' alt="..."/>
                    <div class="card-img-overlay">
                        <h5 class="card-title text-center pt-3 title-animation">Get your favorite products at a small cost</h5>
                    </div>
                </div>
                <div className='d-flex flex-column flex-sm-row justify-content-evenly gap-3 m-5'>
                    <CardInfo
                        title="Fast delivery service"
                        icon={car}
                        text="Best service in the world. You won't regret it"
                    >
                    </CardInfo>
                    <CardInfo
                        title="Low cost products"
                        icon={money}
                        text="We save your money by offering you quality products"
                    >
                    </CardInfo>
                    <CardInfo
                        title="Data privacy"
                        icon={privacy}
                        text="We protect all your data and your payments"
                    >
                    </CardInfo>
                </div>
            </header>
            <div className='mainBody flex-column mx-5 text-center'>
                <h1>Check our merchandising</h1>
                <div className='d-flex flex-column flex-lg-row'>
                    <img src={categoryImg} className="img-fluid  mx-auto d-block flex-grow-1 merchandising-image"/>
                    <div className='m-md-4'>
                        <h2>Get our newest clothes!</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, nascetur montes ad odio augue pretium, sodales maecenas morbi tincidunt dictum leo. Mauris urna malesuada quis tellus est bibendum placerat eget laoreet pharetra consequat facilisis, varius commodo vivamus vulputate nisi viverra mattis ligula interdum vestibulum sociosqu. Lacus nibh rutrum sed suscipit luctus massa platea, sagittis id torquent semper per quam fusce, aliquet netus condimentum hac conubia nam, blandit lectus accumsan sem lacinia fermentum. Congue praesent taciti tempor potenti sapien tempus metus lobortis neque porta, molestie aptent quisque egestas eu penatibus gravida ante. Nostra volutpat habitant tristique eros aliquam purus mus non arcu, cursus libero etiam magna erat diam turpis risus himenaeos proin, ullamcorper magnis suspendisse venenatis et ridiculus fames sociis. Dui primis nisl tortor a velit euismod cras ac ut nec, nullam vehicula curae integer natoque felis posuere eleifend duis. Curabitur dictumst vitae justo nunc ultricies vel, auctor convallis fringilla dignissim scelerisque senectus ornare, habitasse mollis cubilia pellentesque enim. Faucibus donec phasellus litora dapibus porttitor rhoncus elementum sollicitudin at pulvinar, class aenean feugiat parturient cum mi hendrerit inceptos imperdiet dis, </p>
                        <div className='btn-container pt-4'>
                            <Button
                                route="/products"
                                text="Check out"
                            >
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;