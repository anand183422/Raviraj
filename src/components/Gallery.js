'use client';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css'; // Lightbox styles

const galleryImages = [
  {
    src: '/wp-content/uploads/2025/03/468086312_17959338320837759_5184469718064507362_n.jpg',
    thumbnail: 'https://ravirajsabalepatil.onlinespe.com/wp-content/uploads/2025/03/468086312_17959338320837759_5184469718064507362_n.jpeg',
    alt: 'Gallery Image 1',
  },
  {
    src: '/wp-content/uploads/2025/03/1C8A35611.jpg',
    thumbnail: '/wp-content/uploads/2025/03/1C8A35611.jpg',
    alt: 'Gallery Image 2',
  },
  {
    src: '/wp-content/uploads/2025/03/1731563260_gauva-imge1.jpg',
    thumbnail: '/wp-content/uploads/2025/03/1731563260_gauva-imge1.jpg',
    alt: 'Gallery Image 3',
  },
  {
    src: '/wp-content/uploads/2025/03/1C8A3568-scaled.jpg',
    thumbnail: '/wp-content/uploads/2025/03/1C8A3568-scaled.jpg',
    alt: 'Gallery Image 4',
  },
  {
    src: '/wp-content/uploads/2025/03/1C8A3563-scaled.jpg',
    thumbnail: '/wp-content/uploads/2025/03/1C8A3563-scaled.jpg',
    alt: 'Gallery Image 5',
  },
  {
    src: '/wp-content/uploads/2025/03/468303474_17959338167837759_4503188336723094447_n.jpg',
    thumbnail: 'https://ravirajsabalepatil.onlinespe.com/wp-content/uploads/2025/03/468303474_17959338167837759_4503188336723094447_n.jpeg',
    alt: 'Gallery Image 6',
  },
];

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setOpen(true);
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true, // Animate once only
    });
  }, []);

  return (
    <div className="elementor-element e-con-boxed elementor-element-25ed8c2 e-flex e-con e-parent">
      <Container>
        <Row className="mb-4">
          <Col>
            <div className="elementor-widget-container">
              <h2 className="elementor-heading-title elementor-size-default text-center" style={{ color: 'black', fontWeight: 'bold' }}>
                Gallery
              </h2>
            </div>
          </Col>
        </Row>

        <Row className="elementor-gallery__container">
          {galleryImages.map((img, index) => (
            <Col md={4} sm={6} xs={12} key={index} className="mb-4" data-aos="zoom-in">
              <a
                href="#"
                className="e-gallery-item elementor-gallery-item elementor-animated-content d-block"
                onClick={(e) => {
                  e.preventDefault();
                  openLightbox(index);
                }}
              >
                <div
                  className="e-gallery-image elementor-gallery-item__image position-relative"
                  style={{
                    aspectRatio: '1 / 1',
                    width: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '10px',
                  }}
                >
                  <Image
                    src={img.thumbnail}
                    alt={img.alt}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="elementor-gallery-item__overlay position-absolute top-0 start-0 w-100 h-100"></div>
                </div>
              </a>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Lightbox Modal */}
      <Lightbox
        open={open}
        close={() => setOpen(false)} // Close function is correctly passed
        index={photoIndex}
        slides={galleryImages.map((img) => ({
          src: img.src,
          alt: img.alt,
        }))}
        render={{
          buttonClose: () => (
            <button
              onClick={() => setOpen(false)} // Directly use the setOpen function to close
              style={{
                position: 'absolute',
                top: 10,
                right: 10,
                background: 'transparent',
                border: 'none',
                fontSize: '2rem',
                color: 'white',
                cursor: 'pointer',
              }}
            >
              ×
            </button>
          ),
        }}
        styles={{
          container: { backgroundColor: 'rgba(0,0,0,0.8)' },
        }}
      />
    </div>
  );
}
