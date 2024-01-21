import React, { useState } from 'react'

export const Structure = ({explorer}) => {
    const [isOpen, setIsOpen] = useState(false);

    if (explorer.isFolder) {
      return (
        <div className="sub-folder">
          <div className="folder">
            <div
              className="folder-name"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              📁 {explorer.name}
            </div>
            <div className="btn-box">
              <button>📁+</button>
              <button>📑+</button>
            </div>
          </div>
          <div
            className="sub-struct"
            style={{ display: isOpen ? "block" : "none" }}
          >
            
            {explorer.items?.map((item, index) => (
              <Structure key={index} explorer={item} />
            ))}
          </div>
        </div>
      );
    } else {
      return (
        <div className="sub-folder">
          <div className="file">
            <div>📑 {explorer.name}</div>
          </div>
          {explorer.items &&
            explorer.items.map((item, index) => (
              <span key={index}> {item.name}</span>
            ))}
        </div>
      );
    }
}
