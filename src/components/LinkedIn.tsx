import LinkedInIcon from '@mui/icons-material/LinkedIn';

const LinkedInLink = () => {
    return (
        <a href="https://www.linkedin.com/in/jameslee1237" target="blank" rel="noopener noreferrer">
            <LinkedInIcon style={{ fontSize: 60, marginRight: '20px' }} className="hover:scale-110" />
        </a>
    );
};

export default LinkedInLink;