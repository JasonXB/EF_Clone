import BubbleTags from './BubbleTags';
import Avatar from './avatar/avatar'
import React from 'react'

interface MiniProfileCard {
    personsName: string,
    age: string,
  }

const MiniProfileCard = ({personsName, age}: MiniProfileCard) => {
    return(
        <div className="flex h-4 w-4" id='testtest'>
            {personsName}
            {/* <Avatar/> */}
            {/* <ProfileHeader/>
            <BubbleTags/>
            <Compatibility/> */}
        </div>
    )
}

export default MiniProfileCard
