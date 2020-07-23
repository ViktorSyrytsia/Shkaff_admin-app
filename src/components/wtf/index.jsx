import React, {useEffect, useState} from 'react';
import {Form, Spinner as LoadingBar} from 'react-bootstrap';

const Wtf = ({productImages, images, setImages}) => {
    const [image1, setImage1] = useState({})
    const [image2, setImage2] = useState({})
    const [image3, setImage3] = useState({})
    const [image4, setImage4] = useState({})
    const [image5, setImage5] = useState({})

    const stateArr = [setImage1, setImage2, setImage3, setImage4, setImage5]
    const varArr = [image1, image2, image3, image4, image5]


    const onImageInputChange = (e) => {
        const numb = e.target.name.split('-')[1];
        const newZalupa = images;
        newZalupa.splice(numb, 1, { link: e.target.value })
        setImages(newZalupa);
        console.log(images)
    }

    useEffect(() => {
        productImages.forEach( (img, i) => stateArr[i](img.link))
    }, [productImages])

        return (
            <Form.Group controlId="productFormImages">
                <Form.Label>Посилання на зоображення:</Form.Label>
                {images.map((img, idx) => {
                    // console.log('====================================');
                    // console.log('ss', '---', img.link);
                    // console.log('====================================');
                    return (
                        <Form.Control
                            key={idx}
                            name={`image-${idx}`}
                            type="textarea"
                            placeholder="Введіть силку на зоображення"
                            onChange={onImageInputChange} />
                    )
                })}
            </Form.Group>
        )
}

export default Wtf
