import Inside from '../../assets/inside.jpg'
import Bishal from '../../assets/bishal.jpg'
export default function AboutUs(){
    return ( 
        <>
        <div className='bg-gray-300 '>
            <img src={Inside} alt="inside store" className='h-[480px] w-full' />
            <div>
                <h2 className='text-center font-bold text-xl font-mono'>About Us</h2>
                <p className='m-5 p-2'>   Welcome to Kamla Shringar, a prestigious destination for exquisite jewelry in the heart of Nepal. As a leading jeweler, we take pride in our rich heritage, exceptional craftsmanship, and commitment to delivering exceptional pieces that capture the essence of elegance. <br /> <br />

Established with a vision to offer unparalleled beauty and craftsmanship, Jewellery House Nepal has been a trusted name in the industry since its inception. Our passion for jewelry and dedication to excellence have allowed us to build a reputation for creating exquisite designs that stand the test of time. <br /> <br />

At Kamla Shringar we believe that jewelry is not just an accessory; it is an expression of individuality, a celebration of love, and a reflection of one's unique style. We understand that every piece of jewelry carries sentimental value and holds cherished memories, which is why we strive to create designs that evoke emotions and create lasting impressions. <br /> <br />

Our collection showcases a harmonious blend of tradition and contemporary aesthetics. From timeless classics to avant-garde designs, our artisans skillfully handcraft each piece, paying meticulous attention to detail. We source only the finest gemstones, diamonds, and precious metals, ensuring that our jewelry exudes luxury and radiates brilliance. <br /> <br />

We take great pride in our bespoke services, where we collaborate closely with our clients to create personalized pieces that are as unique as they are. Our team of skilled designers and craftsmen work tirelessly to bring your vision to life, resulting in truly one-of-a-kind creations that reflect your style, personality, and aspirations. <br /> <br />

At Kamla Shringar ethical practices and sustainability are paramount. We source our materials from trusted suppliers who adhere to strict environmental and social responsibility standards. By making conscious choices, we aim to protect our planet and ensure that our jewelry brings joy without compromising the welfare of communities and the environment. <br /> <br />

We understand that purchasing jewelry is a significant decision, and we strive to provide an exceptional customer experience from start to finish. Our knowledgeable and friendly staff are here to assist you, offering expert guidance, personalized recommendations, and a warm and inviting atmosphere. <br /> <br />

Whether you are searching for an engagement ring that symbolizes your love, a statement necklace that captures attention, or a delicate bracelet that adds a touch of elegance to your everyday look, Jewellery House Nepal is your ultimate destination. We invite you to explore our online gallery or visit our showroom to immerse yourself in the world of breathtaking jewelry. <br /> <br />

Thank you for choosing Kamla Shringar where every piece tells a story and embodies the essence of timeless beauty.   </p>
            </div>
            
            <div className='grid grid-cols-1 md:grid-cols-2 p-4'>

            <img src={Bishal} alt="" className='h-60 lg:h-full rounded-md ' />
            <div className='p-4 m-2 flex flex-col  justify-center lg:items-center'>

            <h3 className='font-bold text-xl'>CEO & FOUNDER</h3>
            <p>Mr. Bishal Sripal</p>
            <a href="https://www.facebook.com/profile.php?id=100019181383009" target='blank'><button className='font-bold bg-zinc-600 p-2 rounded-lg hover:bg-zinc-800 text-white sm:w-96 '> Facebook</button></a>
            </div>
            </div>
        </div>
        </>
    )
}