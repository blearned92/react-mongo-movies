import ReactPlayer from 'react-player';

const Trailer = ({trailer}) => {

        const key = trailer.key;
        return(
            <ReactPlayer  
                controls={true} 
                playing={false}
                url={`https://www.youtube.com/watch?v=${key}`}
                light={`https://img.youtube.com/vi/${key}/0.jpg`}
                width='100%' 
                height='100%'
                /> 
    )
}

export default Trailer;