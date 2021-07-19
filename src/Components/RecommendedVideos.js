import React from 'react'
import './RecommendedVideos.css'
import VideoCard from './VideoCard'

function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
            <h2>Recommended </h2>
            <div className="recommendedVideos__videos">
                <VideoCard
                    image="https://phantom-marca.unidadeditorial.es/3d7d50c65b8d9d2abaf3ddc6dab62ef4/resize/1320/f/jpg/assets/multimedia/imagenes/2021/07/18/16266053886014.jpg"
                    title="Cristiano Ronaldo recovers from virus and back for Juventus"
                    channel="Marca"
                    views="10M views"
                    timestamp="3 days ago"
                    channelImage="https://images-na.ssl-images-amazon.com/images/I/4145tmfSfiL.png"
                />
                <VideoCard
                    image="https://images.indianexpress.com/2021/07/Messi-CopaAmerica-final.jpg"
                    title="Messi will never be like Maradona even if he wins four World Cups in a row'"
                    channel="The Indian Express"
                    views="2M views"
                    timestamp="1 days ago"
                    channelImage="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1448536523/clyhguweoneebfpbmqwl.png"
                />
                <VideoCard
                    image="https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/ajgopexv5gt7gsqw_1595582459.jpeg"
                    title="Mortal creates history, becomes 1st player from India to be nominated for Esports'"
                    channel="Mortal"
                    views="4.1M views"
                    timestamp="9 days ago"
                    channelImage="https://yt3.ggpht.com/ytc/AKedOLR5vtfXtMoUjxwcBQl72RoFn1TFdOKRJloeWDCRlg=s900-c-k-c0x00ffffff-no-rj"
                />
                <VideoCard
                    image="https://i.ytimg.com/vi/h25S27rh4oY/maxresdefault.jpg"
                    title="A new guest, Jaanki's brother and BB's Titu mama has arrived. What happens next ?'"
                    channel="BB Ki Vines"
                    views="45M views"
                    timestamp="6 months ago"
                    channelImage="https://images-na.ssl-images-amazon.com/images/I/71GNotBgqDL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.png"
                />
                <VideoCard
                    image="https://i.ytimg.com/vi/F1qFB4n9K6Q/mqdefault.jpg"
                    title="BB and Bancho decide to study together. But Sameer and dad are in the house too!'"
                    channel="BB Ki Vines"
                    views="54M views"
                    timestamp="10 days ago"
                    channelImage="https://images-na.ssl-images-amazon.com/images/I/71GNotBgqDL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.png"
                />
                <VideoCard
                    image="https://i.ytimg.com/vi/J-zn8PdvZOU/maxresdefault.jpg"
                    title="Hello all aap sab ke lie aa chuki hai humari specialFINAL EXAMS KI VIDEO"
                    channel="Ashish Chanchlani Vines"
                    views="66M views"
                    timestamp="15 days ago"
                    channelImage="https://yt3.ggpht.com/ytc/AKedOLSyq4h-p_Wf-9Vx_a-Uxptiiu6PtMlHr7Bq83Bipw=s900-c-k-c0x00ffffff-no-rj"
                />

                <VideoCard
                    image="https://images.indianexpress.com/2021/06/sushant-singh-rajput-1200-6-1.jpg"
                    title="Sushant Singh Rajput murder news: Sushant Singh Rajput found dead at Bandra home'"
                    channel="The Economic Times"
                    views="20M views"
                    timestamp="1 year ago"
                    channelImage="https://pbs.twimg.com/profile_images/1285571205966073857/rE3KyZFW_400x400.jpg"
                />

                <VideoCard
                    image="https://i.ytimg.com/vi/7neJgB5nnxU/maxresdefault.jpg"
                    title="SEASON 20 RANK PUSH WITH TEAM SOUL "
                    channel="Soul Regaltos"
                    views="24M views"
                    timestamp="1 month ago"
                    channelImage="https://indiancelebrity.in/wp-content/uploads/2020/09/Soul_Regaltos_logo.png"
                />
                <VideoCard
                    image="https://reactjs.org/logo-og.png"
                    title="React – A JavaScript library for building user interfaces'"
                    channel="ReactJs"
                    views="100K views"
                    timestamp="2 days ago"
                    channelImage="https://www.pngitem.com/pimgs/m/664-6644509_icon-react-js-logo-hd-png-download.png"
                />



            </div>
        </div>
    )
}

export default RecommendedVideos
