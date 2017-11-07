import React from 'react';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Home from './components/Home/Home';
import Company from './components/About/Company/Company';
import FAQ from './components/About/FAQ/FAQ';
import People from './components/People/People';
import Character from './components/Character/Character';
import Missing from './components/Missing/Missing';
import { Route, NavLink, Switch } from 'react-router-dom';

export default (
  <div>
    
        
        <Switch>
        < Route exact path='/' component={Home} />
        < Route path='/contact' component={Contact} />
        < Route path='/about' render={() => (
          < About>
            < Route path='/about/company' component={Company} />
            < Route path='/about/faq' component={FAQ} />
          </About>
        )} />

        < Route path='/people/:id' component={Character} />
        < Route path='/people' component={People} />
        < Route path='/' component={Missing} />
      </Switch>

  </div>
)
