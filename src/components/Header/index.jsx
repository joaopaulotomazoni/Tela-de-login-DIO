import React from "react";
import Logo from "../../assets/Logo_dio.png"
import {
  BuscarInputContainer,
  HeaderContainer,
  Row,
  Wrapper,
  Menu,
  Input,
  UserPicture,
} from './styles';
import {Button} from "../Button"
const Header = ({autenticado}) => {
  return (
    <Wrapper>
      <HeaderContainer>
        <Row>
          <img src={Logo} alt="Logo da DIO" />
          
            {autenticado?( //Se o usuario estiver autenticado ele mostra o o menu baixo
              <>
                <BuscarInputContainer>
                  <Input placeholder="Buscar..."></Input>
                </BuscarInputContainer>
                <Menu>Live Code</Menu>
                <Menu>Global</Menu>
              </>
            ):null}

        </Row>
        <Row>
          {autenticado?(
            <>
              <UserPicture src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAEZ0FNQQAAsY58+1GTAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAOxAAADsQBlSsOGwAADixJREFUeNrlWwtQVOUeP499L4uBcVUSL5ajJWqWD0Re6aSDoRRSqWgNTo7CqFdzRsYyH91qJh3MjLnqlOYlxsgyzQBFQiJEKVFu4ttMQxEUEZJ9s7tn7+/bu3vmiCzsWQ5Uc7+ZT3eXs9/3///+r9//O2dp6o8ZOkwtphKTxmzDvIdp7G1B6F7Yg8EcxzDMdKfTORGvR2E+HBAQYMa0cRxHGY1GBaYKn9/CPIPrjuH/g5gnMZ1/VQD6YKbTNL0oNDR0QFJSEjdp0iRu9OjR9ODBg1kMlfBiu91u/vXXX7nq6mrnkSNHmAMHDjDNzc3XAcY2/HkHpuGvAoAMcykUX52YmKhcuXIlFRsbq3F7gs8DituLioqsWVlZzrKyMiPer3UDwf2ZARgBxXeNHTt2+Pbt251PPfWU1tuFsLgDbm9xJQSdTo0Q8QpQeXm5ISMjg7148eJJAJGGj67+2QBQY2YqlcqV7777rnPFihVqAMEKrOk8fvy4EW5N4X+2pqbGBuV1gv0dffr0MQIwObyFe/7556n24AEw+7p168wbN250OhyO9fjoX+7k+YcC8DfM+VB2OeJbt3XrVnro0KEaoZU/+eQTIjRz/fp1jZiFhw0bZli1ahU1b948jdA7fv75Z1N6erqzqqqqEbh+gI9y3RWkVwAIxByJOQFKT0Uii09ISLBlZmZSMTExAcILKyoqTGlpadS1a9c03UE4IiLC9Nlnn9FInmphiiguLjYhP3ClpaUyAPEdmfj8BOZ5MQmzQwAA+HYsGIWXFnfyIsqFQOng8PBwQ2RkJPPss8/ScFUmODj4vmxusVjsb775puWjjz7SYA1GivgC0PY1a9ZY4BFquVzOCv92+/Zt8/79+zlUDgpewd24cYPIehezEdPkLqNKyH4IJXeVTwDg4kJsGB0XF+dSTqFQyAcNGmR45JFHFO3Ll2dgcS4vL88EIWX19fUqHxXjEM8+g/TYY4+5rD5jxowAyNjhNTabzVRXV+fA1OC1nXyWn5/flp2dXQARUzsqWR0OWJmePHmysp37PzBQqy05OTkObEDX1tYGiLEsvMgEC9KIa60v14MnaJKTk6nHH3/cuGzZMnrOnDksKohQRgoeogHPoMgkGJN/kH+s8Ea5t5rtzTodWqa1tdUMgamjR49yhw8fJtldhcVV/rj2Sy+9xDQ2NnJkPTED5VCLskgtWbLEFh8fb5g6dSodFRVFo3KwWq1W+YCSMpnTm64yXzZcu3atAXHGIKHZzWazTorySdx/5syZNDyIRs7waw2EjxxJkEw+OQIAw6OPPipDArYtX75cJwBA7o2ne2NilKD0cOfPn9dA+UCpuAMsZ0LtV8NVtXBpk1S8Bvwi4MyZM6pz58452+niEAWAsAlBVZC8IYH780C+/PLLnNTrw+r8+larlehpEwOAE1/ihQLDkxQAZHBnSkoKIwBA8oZEo9HIBaWZwZ6iAOBMJhOvNOKKkVK46OhoY9++fXli88QTT2gRCmYp90CrrfC8hi5yb7SZ8WIho16v5wkHyI5SSuE6sDiNkHBI7AEWz+t79+4RXfRiPKC1qamJt1BQUBAtpfu/+OKLrA+gdGsEBgbaBB5g9tYveAOguaWlxSIAQDL3HDdunLFfv37q9p+jhmtCQ0Ml2yckJIQH+e7du4So3vUZAFzceOfOHd4l+/fvL5NKsFmzZnk9OoNnSFYNACafAxoaGgjgd8R4wG00FbyVwsLCJEuCUJLpBBzJqs2AAQN4b7p586aV4CCGCaKXqCMLKNwA2NyHHkKX1YNxicoNaKZsAwcODOqk/1Cnpqa2uuu2zwMkjbpw4UKAIM/YITP/Hj0KqQJ1YgCo/e2337Ru9sQiZnUgFha73a4SNCaq1atXW9Cc6CRMkGxubm6gmKPDnTt3GgoLC9Xt4t8EeQPdJMiAQXS5LiYE6tBKOpA8jG7BaFjb0a4pksOddQsXLtSDaNioXh7Yvw37G7G/DvvfZ8jhw4fz8X/p0iXW7f4mMQAQZa+cPn2aZ1MjRozoMEHBArqnn37aDhc095byP/74o3HkyJFONGgdtt8AgJcVchHjXPaaeTtxx7OILacg5r1WAqCsHjNmjHzbtm16qgdvZKCpcbzzzjv62NhYNXKUV3I2evRo3ltramrk0OWc157B2x9QCs+cPHkyUQBAp4oh1mToz3VFRUWGnJwcxUMPPaSQUnmUMguqBHfs2LEucw48khEA4IQuNaI9AONkVVUV/2bChAkk43dZpwsKCgIQLk4IKtl9vm+//VYfERHBYs0uD1iR/KzY3+Mdzp9++on8f8ofAE5cvnxZDcua3WxQ7WvDAmspn3nmGfX69ev1QN9vjo+97RkZGXpSacDn5b58B6XULpfLXZ4NLmNCIieGO+MPAC0Q/jI5+vJ8AKV8Fh7fZRCvuri4OCsqilWs8o2NjTa4su3jjz8WVWYnTZrEvz5+/DgJ2yqqkxsoTBd1ubSkpIR/P23aNNFWhBVoWER0PkAO4cBFRFPwyZMn86+Li4vJOUBZZ9czXVjxOwz+/ZQpU1iGYewiqS/nzzGaQqFQJiQkiPIcrVZrjY6O9pAi56FDh2joUOI3ABhl4AIyNEZmd4upQgmyiBFq9uzZfpfFzvqGjsb06dNJEmTc9Z8cuRNZK7sDwD3U3u+/+eYbTtCw+CwUKLR57Nixft8ae+GFFxiEj10EYPy1Bw4ccJK7QXhp7w4AhHzs+/LLL4UAkIcbfKK+KSkpRAivexALtbS0eE1QarVahbDzyeMCAgIs8ACeHOXl5RH339vV93yx5r6ysjI5uQfnTk5KbOQTAIS4ePvbwYMHXbWdcIaKigqvnIHcPPFlrzlz5jiQN1xJE+XbePbsWWL5Q1IAQI5TCtCl8a4ExtdlbQ8ODrYgIT1wx4jcr1u6dKl+xowZOlhffuvWLSVKl1fOAA7AwOO63G/x4sV8ot2xYwepYHuo/93c7TYAJAx2bd26VU64uLvW6oYMGdIp04PgHIS4r4z98ssvJCfYsJbOG2eor6+/T2idTqcC/+iUgEVFRRnQHLlyDVp2265du2RYc4cvuvma0Ipqa2tvgOdb3PyA6up2Vnv3h1B68gQIXFPt7TuVlZUahASbn5+vb3dg2mkZFcryxRdftDU3N9e4CZBkAHCw/hbyeIrng7lz56oGDhxo9nIia4WXuBKSXq+3AQz9ggULdGazuUtiQygvsr8OYaZva2tzhd3MmTPJQyId5pNRo0YZQdA8bbFzw4YNNGTN8rVyiKmz/y4vL7egFze4mw72vffe6zA2k5KSHBBYjmbKBAG5vXv3ij41QmutI+GChGZGPlEjn3R4oAGjUJ5nBQoLC41o4evx8mtf92FFyEQyP3vt2rW4V1991UVtEXdycAQzKsR9jQri2bxv3762V155Rf3777/LKT8HCJh8586ddGhoqHHYsGE0mJ2iHe83vP322x7rc/A0B5IqiYfqngCAjP+Any+KiYkhR2QKclSGuLZBSFZId69evWpG1egjxSMySGoM2mElujrzzZs3VYK2145S6uzbt6/cHfsGeE0tXqaLOZQRCwDxgnvV1dWJ6enkIVCaQR4gpcxw6tQppeAYWkVJPNqvicRnAtFyPVlCziRRVpnW1tZFeHtRzLr+WOhTxNm5zZs38+UqKytLFRYW1mtngiBQ5jVr1vDVBGFgQfkkTU++2LX8AYBUhEXr1q2ToTSa3V2YfM+ePZTYTtGfoVKpbF999ZUrCbuPvEybNm0iXGWJP+uxfsrR4HA4tCdOnIicP38+4wkF8HEj2mdlTwKAfGNCz+9yfVIm0StwjY2Nq/H2cG8CQBA/WldXl0zIGpia0s3IlChbepCdHgEBFLo1MzOTv3GybNkyI8gZebR+qb9rst2Qh3CA79HILIiNjbUPHjzYVaKQjNgjR46YAY6kp8KJiYkGsEkt7S76yPr6N954wwRDPEd5ufff0wC4GiUIcBllCiV4lg2doow8Xkc6uIKCAiup41IoP3HiRAPoscrzlOjp06dNYIssGqskvD3XnbVZCeS7gDLEQuGYefPmOdDDy5RKJUMeeAAza+suCOPHjzcWFxerNBqNi0aTZik+Pp5BJ7lCDOPrSQDIKAeHHwLXH56amkrO81gIzKJHJweTVvAEv0AgD0EKlUeTY0XHSA5aN8PzNkghuFQAkKRY0NDQMOaHH34Ih+LkJJiBN7CgwzTpCcAOReUErKFHD6GBN7mUJydHoL7OS5cu7Uaru1wquVkJ8xTp1vYh+Y2HJ/ydhACEZwkQ8AoZegI9yqaiqxNi5DgHiI0BRCvQ87huU1OThSgPAkaUX0hJeP9RSgA8leFrxGkEktbQ5ORkO7iBDASJTkhIUJIfQaBsMUheHe6LJNq2f//+NnALnafDQ/NlIW5/5cqVXVA+g5L4N0NSA+ACgRykwmoP7969exyISlu/fv1cOYDcs5s9e7atsrKSnPw80NmVlpayTz75JE9xyf1FkB4ZQuufWHMV1QN3nnsCAHdKcBYZDIbbOTk50wYNGmSBYi5yFBQUJHvttddkOp2uFfmCRZ7gtmzZYvrwww8DiLd4vp+dnW2YO3eu02g0LiDHAz3FLHvjh5OxcOe8tLS0QCilEj7CitbaAm7P9O/fXyE4EWoDQCQUbgPEFFL2e1K43gCAjIcBwqfh4eFTPv/8c0dkZGSHP5AoKSkxACjSXu9FvC+muvFjqD8bAJ69FiIhbiRnCe+//74KLi/3lLjXX3/dmpuba4HV/0GYbm8K1dsjDN6QHRISMm3jxo3kES76rbfeUrS2tu6B1Qm7a6J62Sp/1HgOQGzC/+RnsYTYVFD/h0Pm56GMZOO/4lamIsc6ntMAAAAASUVORK5CYII= "/>
            </>
            
          ):(
            <>
              <Menu href='/'>Home</Menu>
              <Button title="Entrar"></Button>
              <Button title="Cadastrar"></Button>
            </>
          )}

        </Row>
      </HeaderContainer>
    </Wrapper>
  );
}

export {Header};