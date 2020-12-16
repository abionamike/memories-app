import React from 'react';
import { useDispatch } from 'react-redux';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteMemory, fetchDataForUpdate, increaseLike, listMemories } from '../actions/memoryActions';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #f5f5f5;
  border-radius: 20px;
  margin: 15px;
  width: 280px;
`;

const ImageText = styled.div`
  display: flex;
	justify-content: space-between;
	color: #fff;
	padding: 15px;
`;

const Name = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 100px;
`;

const Creator = styled.h4`
  margin: 0;
`;

const Time = styled.p`
  margin: 5px 0;
`;

const Edit = styled.div`
  cursor: pointer;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 15px;
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  margin-bottom: 0px;
  color: rgb(78, 78, 184);
  cursor: pointer;
`;

const Tags = styled.small`
  color: rgb(139, 139, 139);
`;

const Title = styled.h2`
  color: #444;
`;

const Message = styled.p`
  color: rgb(82, 82, 82);
`;


const Card = ({ memory }) => {
  const CardTop = styled.div`
    background-image: url(/${memory.image});
    background-size: cover;
    background-position: top center;
    position: relative;
    z-index: 1;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
  `;

  const dispatch = useDispatch();
  const tags = memory.tags.split(',');

  const handleFetch = () => {
    dispatch(fetchDataForUpdate(memory));
  }

  const handleLike = () => {
    console.log({ id: memory._id, like: memory.like + 1});
    dispatch(increaseLike({ id: memory._id, like: memory.like + 1}));
  }

  const handleDelete = () => {
    dispatch(deleteMemory(memory._id));
    dispatch(listMemories());
  }

  return (
    <Container className="card">
      <CardTop className="image">
        <ImageText>
          <Name>
            <Creator>{memory.creator}</Creator>
            <Time>2 months ago</Time>
          </Name>
          <Edit title="Edit">
            <MoreHorizIcon onClick={handleFetch} />
          </Edit>
        </ImageText>
      </CardTop>
      <Description>
        <Tags>
          {tags.map(tag => (
            `#${tag} `
          ))}
        </Tags>
        <Title>{memory.title}</Title>
        <Message>{memory.message}</Message>
      </Description>
      <Icons>
        <div title="Like" onClick={handleLike}><ThumbUpIcon fontSize="small" /> Like {memory.like}</div>
        <div title="Delete" onClick={handleDelete}><DeleteIcon fontSize="small" />Delete</div>
      </Icons>
    </Container>
  )
}

export default Card;
