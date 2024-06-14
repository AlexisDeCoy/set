import { useState } from 'react';
import SelectionPop from '../components/SelectionPop';
import Shape from '../components/Shape';
import ShapeData from '../data/ShapeData';

// User Can Change Shapes, Colors, Fills
// TBD
// Stroke Width
// Presets
// Single Selection Pop per Section, not shape & fill separately
// Prevent Duplicate Selections

const SettingsPop = (props) => {
  const { toggleSettings, user, userUpdate } = props;
  const cardTypes = [1, 2, 3];
  const [fillWindow, setFillWindow] = useState([false, false, false]);
  const [shapeWindow, setShapeWindow] = useState([false, false, false]);
  const [updatedUser, setUpdatedUser] = useState({
    colors: [...user.colors],
    fills: [...user.fills],
    shapes: [...user.shapes],
    strokeWidth: user.strokeWidth
  });

  // Handle Change Of Input Value For A Certain Card Type
  const handleChange = (value, category, index = -1) => {
    const modifiedUser = { ...updatedUser };

    if (index !== -1) {
      modifiedUser[category][index] = value;
    } else modifiedUser[category] = value;

    setUpdatedUser(modifiedUser);
  };

  // Open/Close Selection Pop Up
  const toggleWindow = (type, index) => {
    if (type === 'shapes') {
      const newShapeWindow = [...shapeWindow];
      shapeWindow[index] ?
        newShapeWindow[index] = false :
        newShapeWindow[index] = true;
      setShapeWindow(newShapeWindow);
    };
    if (type === 'fills') {
      const newFillWindow = [...fillWindow];
      fillWindow[index] ?
        newFillWindow[index] = false :
        newFillWindow[index] = true;
      setFillWindow(newFillWindow);
    };
    return null;
  };

  return (
    <div className='settings pop fx'>
      <div className='white title text-above'>Customize Cards</div>
      {/* X Closes Pop Up And Updates Instance Of UserData */}
      <button className='settings close white title' onClick={() => {
        userUpdate(updatedUser);
        toggleSettings();
      }}>X</button>
      {/* Map cardTypes To Show Current Settings */}
      {/* All Data Is By Index Of UserData Color/Shape/Fill Arrays*/}
      {cardTypes.map((cardType, i) => (
        <div
          key={i}
          // Rounded Outside Corners For First/Last Section
          className={(i === 0 ? 'first ' : i === 2 ? 'last ' : '')
            + 'settings section'}
          style={{ background: updatedUser.colors[i] + '20' }}
        >
          <div className=' fx-c h-100 jc-sb bs-bb' >
            <div className='settings subtitle bold'>Type {cardType}</div>
            {/* Preview of Current Color/Shape/Fill Selection */}
            <div className='settings preview'>
              <Shape
                color={updatedUser.colors[i]}
                fill={updatedUser.fills[i]}
                shape={ShapeData[updatedUser.shapes[i]]}
                strokeWidth={updatedUser.strokeWidth}
              />
            </div>
            {/* Container For All Inputs */}
            <div className='settings input-container fx-c jc-sb'>
              {/* Color Input */}
              <label className='settings input color'>
                <div className='subtext bold'>Color:</div>
                <input
                  className='fx w-100'
                  type='color'
                  defaultValue={updatedUser.colors[i] ?? ''}
                  onChange={(e) => {
                    handleChange(e.target.value, 'colors', i);
                  }}
                />
              </label>
              {/* Container For Shape/Fill Inputs */}
              <div className='settings shapes patterns fx jc-sb'>
                {/* Shape Input */}
                <label
                  // Round Outside Lower Corner On First Input To Match Section
                  className={(i === 0 ? 'first ' : '') + 'settings input'}
                  // Cascades To Close With On Click In Selection Window
                  onClick={() => { toggleWindow('shapes', i) }}
                >
                  <div className='subtext bold'>Shape</div>
                  {/* No Fill Shape Preview For Input */}
                  <Shape
                    color={updatedUser.colors[i]}
                    fill='none'
                    shape={ShapeData[updatedUser.shapes[i]]}
                    strokeWidth={updatedUser.strokeWidth}
                  />
                  {shapeWindow[i] === true ?
                    <SelectionPop
                      updatedUser={updatedUser}
                      type='shapes'
                      onClick={handleChange}
                      index={i}
                    />
                    : ''}
                </label>
                {/* Fills Input */}
                <label
                  // Round Outside Lower Corner On Last Input To Match Section
                  className={(i === 2 ? 'last ' : '') + 'settings input'}
                  // Cascades To Close With On Click In Selection Window
                  onClick={() => { toggleWindow('fills', i) }}
                >
                  <div className='subtext bold'>Pattern</div>
                  {/* No Shape Fill Preview For Input */}
                  <Shape
                    color={updatedUser.colors[i]}
                    fill={updatedUser.fills[i]}
                    shape={ShapeData['rectangle']}
                    strokeWidth={5}
                  />
                  {fillWindow[i] === true ?
                    <SelectionPop
                      updatedUser={updatedUser}
                      type='fills'
                      onClick={handleChange}
                      index={i}
                    />
                    : ''}
                </label>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SettingsPop;