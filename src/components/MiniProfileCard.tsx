import BubbleTags from './BubbleTags';
import Avatar from './avatar/avatar'
import tempImage from '../../src/assets/cat.jpeg'
import { BUBBLE_TAG_TYPE_CLASSES } from './BubbleTag';
import style from '../../styles/MiniProfileCard.module.css'


const MiniProfileCard = ({mentorsInfo}: any) => {
    const {name, location, job} = mentorsInfo
    const arrTags = ["management", "design"]
    const personsName="Bilbo Baggins"
    return(
        <div className={`${style.miniProfileCard} flex`}>
            <Avatar imgLocation={tempImage} displaySize="mediumLarge" personsName={personsName}/>
            <div className={`${style.infoContainer} font-mainFont pl-3`}>
                <h2 className={style.name}>{name}</h2>
                <h4 className={style.locationJob}>{location}</h4>
                <h4 className={style.locationJob}>{job}</h4>
                {/* Remove below div when <BubbleTags/> is working, and uncomment <BubbleTags/> */}
                <div className="h-7 my-4">
                    [Bubble Tags]
                </div>
                {/* <BubbleTags tags={arrTags} bubbleTagType={BUBBLE_TAG_TYPE_CLASSES.blue} /> */}
                <div className={style.compatibility}> 
                    <h4>Compatibility</h4>
                    {/* Remove below div when <PercentBar/> is working, and uncomment <PercentBar/> */}
                    <div className="h-7 my-4">
                        [Percent Bar]
                    </div>
                    {/* <PercentBar /> */}
                </div>
            </div>
        </div>
    )
}

export default MiniProfileCard
