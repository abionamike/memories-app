import Memory from '../model/memory.js';

export const listMemories = async (req, res) => {
    try {
        const memories = await Memory.find();
        res.json(memories); //returns all memory
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createMemories = async (req, res) => {
    try {
        const memory = await Memory.create(req.body);

        res.json(memory); //returns the created memory
    } catch (error) {
        res.status(403).json({message: error.message});
    }
}

export const updateMemories = async (req, res) => {
    try {
        const { creator, title, message, tags, image } = req.body;

        const memory = await Memory.findById(req.params.id);

        memory.creator = creator || memory.creator;
        memory.title = title || memory.title;
        memory.message = message || memory.message;
        memory.tags = tags || memory.tags;
        memory.image = image || memory.image;

        const updatedMemory = await memory.save(); 

        res.json(updatedMemory); //returns the updated memory
    } catch (error) {
        res.status(403).json({message: error.message});
    }
}

export const deleteMemories = async (req, res) => {
    try {
        const memory = await Memory.findByIdAndDelete(req.params.id);

        res.json(memory); //returns the deleted memory
    } catch (error) {
        res.status(403).json({message: error.message});
    }
}