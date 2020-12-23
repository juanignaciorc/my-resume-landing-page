import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { AboutScreen } from '../components/screens/AboutScreen';
import { EducationScreen } from '../components/screens/EducationScreen';
import { InterestsScreen } from '../components/screens/InterestsScreen';
import { SkillsScreen } from '../components/screens/SkillsScreen';
import { Navbar } from '../components/ui/Navbar';



export const AppRouter = () => {
    return (
        <Router>
            <div>

                <Navbar />
                {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                <Switch>
                    <Route exact path="/" component={AboutScreen} />
                    <Route exact path="/education" component={EducationScreen} />
                    <Route exact path="/skills" component={SkillsScreen} />
                    <Route exact path="/interests" component={InterestsScreen} />
                    

                    <Redirect to="/" />

                </Switch>
            </div>
        </Router>
    )
}
