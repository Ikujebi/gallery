import React, { useState, useEffect } from "react";
import { Row, Col, Input, Button } from "antd";
import ImageList from "./Images"; // Import your ImageList component.
import { DragDropContext } from "react-beautiful-dnd";



const Gallery = ({images}) => {

    console.log(images);
    const [searchTerm, setSearchTerm] = useState(""); // State to store the search term.
    const [imageOrder, setImageOrder] = useState([...images.map((image) => image.id)]);



    // Function to handle filtering images based on search term.
     const filteredImages = images.filter((image) =>
     image.tag.toLowerCase().includes(searchTerm.toLowerCase())
   );
  
    // Function to handle search input change.
    const handleSearchInputChange = (e) => {
      setSearchTerm(e.target.value);
    };


    const onDragEnd = (result) => {
        if (!result.destination) {
          // Item was dropped outside the droppable area, no action required.
          return;
        }
    
        // Reorder the images based on the drag-and-drop.
        const newImageOrder = [...imageOrder];
        const [movedImage] = newImageOrder.splice(result.source.index, 1);
        newImageOrder.splice(result.destination.index, 0, movedImage);
    
        // Update the state with the new order of images.
        setImageOrder(newImageOrder);
      };
    
      // Use the ordered image IDs to render the images in the desired order.
      const orderedImages = imageOrder.map((imageId) =>
        images.find((image) => image.id === imageId)
      );
    
    
console.log(images);
    return (
        <div>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <h1>Image Gallery</h1>
            </Col>
            <Col span={12}>
              <Input
                placeholder="Search images by tag"
                onChange={handleSearchInputChange}
              />
            </Col>
          </Row>
          <div>
        <DragDropContext onDragEnd={onDragEnd}>
          <ImageList images={filteredImages} />
        </DragDropContext>
      </div>
        </div>
      );
};

export default Gallery;





