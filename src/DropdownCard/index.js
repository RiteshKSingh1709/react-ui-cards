import React from 'react';

import Card from '../Card';
import NameSurname from './NameSurname';
import Arrow from './Arrow';
import ToggledCard from './ToggledCard';

import styles from './styles.scss';

class DropdownCard extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    let{
      name,
      surname
    } = this.props;
    return(
      <Card className='dropdown-card'>
        <NameSurname
          name={ name }
          surname={ surname }
          />
        <Arrow/>
        
      </Card>
    );
  }
}
export default DropdownCard;
