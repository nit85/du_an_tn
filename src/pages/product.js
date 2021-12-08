import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import image3 from '../images/slide3.jpg'
const Product = () => {
  return (
    <div >
      <div>
      <div className="timkiemsp">
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Tìm kiếm sản phẩm" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit"> Tìm kiếm </button>
      </form>
      </div>
     <Card className="sp1" sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="310"
          image={image3}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Organic Broken Rice
          </Typography>
          <Typography variant="body2" color="text.secondary">
           60.000 VND
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Mua
        </Button>
        <Button size="small" color="primary">
          Them gio hang
        </Button>
      </CardActions>
    </Card>
     <p/><p/>
    <Card className="sp2" sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="310"
          image={image3}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Organic Broken Rice
          </Typography>
          <Typography variant="body2" color="text.secondary">
           60.000 VND
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Mua
        </Button>
        <Button size="small" color="primary">
          Them gio hang
        </Button>
      </CardActions>
    </Card>

<Card className="sp3" sx={{ maxWidth: 345}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="310"
          image={image3}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Organic Broken Rice
          </Typography>
          <Typography variant="body2" color="text.secondary">
           6000 VND
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Mua
        </Button>
        <Button size="small" color="primary">
          Them gio hang
        </Button>
      </CardActions>
    </Card>

 
    <Card className="sp4" sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="310"
          image={image3}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Organic Broken Rice
          </Typography>
          <Typography variant="body2" color="text.secondary">
           60.000 VND
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Mua
        </Button>
        <Button size="small" color="primary">
          Them gio hang
        </Button>
      </CardActions>
    </Card>
    <Card className="sp5" sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="310"
          image={image3}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Organic Broken Rice
          </Typography>
          <Typography variant="body2" color="text.secondary">
           60.000 VND
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Mua
        </Button>
        <Button size="small" color="primary">
          Them gio hang
        </Button>
      </CardActions>
    </Card>
    <Card className="sp6" sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="310"
          image={image3}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Organic Broken Rice
          </Typography>
          <Typography variant="body2" color="text.secondary">
           60.000 VND
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Mua
        </Button>
        <Button size="small" color="primary">
          Them gio hang
        </Button>
      </CardActions>
    </Card>
    </div>

    <br/>
    <br/>


    <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>


    </div>
  );
};

export default Product;
