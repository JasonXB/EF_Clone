import { createContext, useState, ReactNode, Dispatch, SetStateAction, useEffect } from 'react';
import MentorshipRequest from '../../src/interface/mentorship-request';

interface Children {
    children: ReactNode
}
  
export const MentorshipRequestsContext = createContext({
    mentorshipRequests: [] as MentorshipRequest[],
    setMentorshipRequests: (() => {}) as Dispatch<SetStateAction<MentorshipRequest[]>>,
    pendingRequests: [] as MentorshipRequest[],
    setPendingRequests: (() => {}) as Dispatch<SetStateAction<MentorshipRequest[]>>,
});

export const MentorshipRequestsProvider= ({ children }: Children) => {
    const [mentorshipRequests, setMentorshipRequests] = useState<MentorshipRequest[]>([]);
    const [pendingRequests, setPendingRequests] = useState<MentorshipRequest[]>([]);

    useEffect(()=>{
        const pendingMentorshipRequests = mentorshipRequests.filter(
            (request) =>
              request.status !== 'Request Accepted' &&
              request.status !== 'Request Rejected'
        );
        setPendingRequests(pendingMentorshipRequests)
    },[mentorshipRequests])

    
    const value = {
        mentorshipRequests, 
        setMentorshipRequests,
        pendingRequests, 
        setPendingRequests
    };

    return (
        <MentorshipRequestsContext.Provider value={value}>
        {children}
        </MentorshipRequestsContext.Provider>
    );
};
