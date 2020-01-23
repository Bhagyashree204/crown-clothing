import React from 'react';
import {connect } from 'react-redux';
import  {createStructuredSelector} from 'reselect';
import MenuItem from '../menu-item/menu-item.component.jsx';
import './directory.style.scss';
import {selectDirecotrySections} from '../../redux/directory/directory.seelctor';

const Directory =({sections}) => (
            <div className="directory-menu">
                {sections.map(({ title, imageUrl, id, size, ...otherProps }) =>
                    (<MenuItem key={id} title={title} imageurl={imageUrl} size={size} {...otherProps}/>))
                }
            </div>
)

const mapStateToProps = createStructuredSelector({
    sections:selectDirecotrySections
});


export default connect(mapStateToProps,null)(Directory);