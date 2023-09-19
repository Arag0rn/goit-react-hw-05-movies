import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CastCard } from "components/CastList/CastCard";
import { getMovieCast } from "components/FetchApi";
import { Loader } from 'components/Loader/Loader'; 


const CastPage = () => {
    const [movieCast, setMovieCast] = useState([]);
    const { id } = useParams();
    const [loader, setLoader] = useState(false);


    useEffect(() => {
        const onGetMovieCast = async () => {
            setLoader(true)
            try {
                const { cast } = await getMovieCast(id);
                setMovieCast(cast);
            } catch (error) {
                console.error(error);
            } finally {
                setLoader(false)
            }
        };

        onGetMovieCast();
    }, [id]);

    return (
        <>
            {loader ? (
                <Loader />
            ) : (
                <CastCard data={movieCast}></CastCard>
            )}
        </>
    );
};

export default CastPage;