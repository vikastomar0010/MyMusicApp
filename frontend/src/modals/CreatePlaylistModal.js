import { useState } from "react";
import TextInput from "../components/shared/TextInput";
import { makeAuthenticatedPOSTRequest } from "../utils/serverHelpers";
const CreatePlaylistModal = ({closeModal}) => {
    const[playlistName, setPlaylistName] = useState("");
    const[playlistThumbnail, setPlaylistThumbnail] = useState("");

    const createPlaylist = async () => {
        const response = await makeAuthenticatedPOSTRequest("/playlist/create", 
        {name: playlistName, thumbnail: playlistThumbnail, songs: []});

        if(response._id) closeModal();
    }

    return(
        <div className="absolute bg-black w-screen h-screen 
        bg-opacity-70 flex justify-center items-center"
        onClick={closeModal}>
            <div className="bg-app-black w-1/3 rounded-md p-4" onClick={(e)=>{e.stopPropagation();}}>
                <div className="text-white mb-5 font-semibold text-lg text-center cursor-default">
                    Create Playlist
                </div>
                <div className="space-y-5 flex flex-col justify-center items-center">
                    <TextInput  
                    label="Name" 
                    labelClassName={"text-white"}
                    placeholder="Playlist Name"
                    value={playlistName}
                    setValue={setPlaylistName}
                    />
                    <TextInput  
                    label="Thumbnail" 
                    labelClassName={"text-white"}
                    placeholder="Thumbnail"
                    value={playlistThumbnail}
                    setValue={setPlaylistThumbnail}
                    />

                    <div className="bg-app-green w-1/3 rounded flex font-semibold
                    justify-center items-center py-2 cursor-pointer" onClick={createPlaylist}>
                        Create
                    </div>
                </div>
            </div>
        </div>
    );
}; 

export default CreatePlaylistModal;