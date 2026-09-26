import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Contact(){
    return <>
    <section className="py-15">
        <div className="column-center gap-10 w-[80%] mx-auto ">
            <div className="column-center gap-3 color-secondary w-full ">
                <h2 className="text-secondary">contact me</h2>
                <div className="center gap-1 xs:gap-3 w-[50%] xs:w-[45%] sm:w-[40%] lg:w-[35%] xl:w-[25%]">
                    <div className="h-1 bg-secondary w-full"></div>
                    <img src="./src/assets/icons/star.svg" className='size-6 xs:size-8'/>
                    <div className="h-1 bg-secondary w-full"></div>
                </div>
            </div>
            <Box 
                component="form"
                autoComplete="off"
                className="flex flex-col gap-6 w-[80%] sm:w-[50%] "
            >
                <TextField
                    id="standard-multiline-flexible"
                    label="Full name"
                    variant="standard"
                />
                 <TextField
                    id="standard-multiline-flexible"
                    label="Email address"
                    variant="standard"
                />
                 <TextField
                    id="standard-multiline-flexible"
                    label="Phone number"
                    variant="standard"
                />
                 <TextField
                    id="standard-multiline-flexible"
                    label="Message"
                    variant="standard"
                />
            </Box>
            <button className="bg-bg-secondary rounded-xl py-3 px-5">send</button>
        </div>
    </section>
    </>
}
export default Contact;