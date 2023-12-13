import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import Story from '../pages/Story/Story';
import Challenges from '../pages/Challenge/Challenges/Challenges';
import ChallengeDetail from '../pages/Challenge/ChallengeDetail/ChallengeDetail';
import SendIdea from '../pages/SendIdea/SendIdea';
import Submitted from '../pages/Submitted/Submitted';
import { Toaster } from 'react-hot-toast';

const App = () => {
    return (
        <>
            <Toaster />
            <Routes>
                <Route element={<Home />} path={'/'}></Route>
                <Route element={<Story />} path={'/story'}></Route>
                <Route element={<Challenges />} path={'/:id'}></Route>
                <Route
                    element={<ChallengeDetail />}
                    path={'/:id/:challenge'}></Route>
                <Route element={<SendIdea />} path={'/idea'}></Route>
                <Route element={<Submitted />} path={'/ideaSubmitted'}></Route>
            </Routes>
        </>
    );
};

export default App;
