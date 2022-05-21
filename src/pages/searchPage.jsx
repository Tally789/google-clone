import React from 'react';
import { Link } from 'react-router-dom';
import Search from './search';
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import ImageIcon from '@mui/icons-material/Image';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import RoomIcon from '@mui/icons-material/Room';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "./searchPage.css"
import { useStateValue } from '../StateProvider';
import useGoogleSearch from '../seGoogleSearch';
import { ListItemSecondaryAction } from '@mui/material';

const Searchpage = () => {

    const [{term}] = useStateValue();

    const { data } = useGoogleSearch(term);


    console.log(data);
    return (
        <div className='searchPage'>
            <div className="searchpage__header">
                <Link to="/">
                    <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="" />
                </Link>
                <div className="searchPage__headerBody">
                    <Search hidebuttons/>

                    <div className="searchPage__options">
                        <div className="searchPage__optionsLeft">
                            <div className="searchPage__option">
                                <SearchIcon />
                                <Link to="/all">All</Link>
                            </div>
                            <div className="searchPage__option">
                                <DescriptionIcon />
                                <Link to="/all">News</Link>
                            </div>
                            <div className="searchPage__option">
                                <ImageIcon />
                                <Link to="/all">Images</Link>
                            </div>
                            <div className="searchPage__option">
                                <LocalOfferIcon />
                                <Link to="/all">Shopping</Link>
                            </div>
                            <div className="searchPage__option">
                                <RoomIcon />
                                <Link to="/all">Maps</Link>
                            </div>
                            <div className="searchPage__option">
                                <MoreVertIcon />
                                <Link to="/all">More</Link>
                            </div>
                        </div>
                        <div className="searchPage__optionsRight">
                            <div className="searchPage_option">
                                <Link to="/settings">Settings</Link>
                            </div>
                            <div className="searchPage_option">
                                <Link to="/tools">Tools</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            { term && (
         
            <div className="searchPage__results">
                <p className="searchPage__resultCount">
                About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}
                </p>
                {
                    data?.items.map((item)=>{
                        return <div className='searchPage__result'>
                        <a href={item.link} className='searchPage__resultLink'>

                        {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                            <img src={item.pagemap?.cse_image[0]?.src} alt="" className='searchPage__resultImage'/>
                        )}
                            {item.displayLink}
                        </a>
                        <a href={item.link} className='searchPage__resultTitle'>
                            <h2>{item.title}</h2>
                        </a>
                        <p className='searchPage__resultDescription'>
                        {item.snippet}
                        </p>
                    </div>
                    })}
            </div>)}   
        </div>
    );
}

export default Searchpage;
