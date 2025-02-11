import { Col, Button } from "react-bootstrap";

export const ProjectCard = ({ title, description, githubUrl }) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx">
                <div className="porj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <div className="mt-3">
                        <Button 
                            variant="primary" 
                            href={githubUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            View on GitHub
                        </Button>
                    </div>
                </div>
            </div>
        </Col>
    );
};
