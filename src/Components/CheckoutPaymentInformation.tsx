import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

interface CreditCardData {
  id: number;
  cardNumber: string;
  name: string;
  expDate: string;
  cvv: string;
  zipcode: string;
}

const exampleCreditCard: CreditCardData = {
  id: 1,
  cardNumber: "**** **** **** 1234", // not the actual way to show only last 4 digits
  name: "John Doe",
  expDate: "12/25",
  cvv: "***",
  zipcode: "12345",
};

const PaymentSection: React.FC = () => {
  const [creditCards, setCreditCards] = useState<CreditCardData[]>([
    exampleCreditCard,
  ]);
  const [isAddingCard, setIsAddingCard] = useState(false);
  const [selectedCard, setSelectedCard] = useState<number | null>(
    exampleCreditCard.id
  );
  const [isEditingCard, setIsEditingCard] = useState(false);

  const [newCard, setNewCard] = useState<CreditCardData>({
    id: Date.now(),
    cardNumber: "",
    name: "",
    expDate: "",
    cvv: "",
    zipcode: "",
  });

  const [editedCard, setEditedCard] = useState<CreditCardData | null>(null);

  const handleAddNewCard = () => {
    setIsAddingCard(true);
    setIsEditingCard(false);
    setSelectedCard(null);
  };

  const handleSaveCard = (newCardData: CreditCardData) => {
    const updatedCards = [...creditCards, newCardData];
    setCreditCards(updatedCards);
    setIsAddingCard(false);
    setNewCard({
      id: Date.now(),
      cardNumber: "",
      name: "",
      expDate: "",
      cvv: "",
      zipcode: "",
    });
  };

  const handleEditCard = (cardId: number) => {
    setIsEditingCard(true);
    setIsAddingCard(false);
    setSelectedCard(null);
    const cardToEdit = creditCards.find((card) => card.id === cardId);
    setEditedCard(cardToEdit || null);
  };

  const handleSaveEditedCard = (editedCardData: CreditCardData) => {
    const updatedCards = creditCards.map((card) =>
      card.id === editedCardData.id ? editedCardData : card
    );
    setCreditCards(updatedCards);
    setIsEditingCard(false);
    setEditedCard(null);
  };

  const handleDeleteCard = (cardId: number) => {
    const updatedCards = creditCards.filter((card) => card.id !== cardId);
    setCreditCards(updatedCards);
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography
          variant="h5"
          component="div"
        >
          Payment
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
        >
          Use Credit / Debit card
        </Typography>
        <RadioGroup
          name="creditCard"
          value={selectedCard}
          onChange={(event) => setSelectedCard(Number(event.target.value))}
        >
          {creditCards.map((card) => (
            <FormControlLabel
              key={card.id}
              value={card.id}
              control={<Radio />}
              label={
                <Box
                  display="flex"
                  alignItems="center"
                >
                  <Typography variant="subtitle2">{card.cardNumber}</Typography>
                  <Button
                    color="primary"
                    onClick={() => handleEditCard(card.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    color="secondary"
                    onClick={() => handleDeleteCard(card.id)}
                  >
                    Delete
                  </Button>
                </Box>
              }
            />
          ))}
          <FormControlLabel
            value="newCard"
            control={<Radio />}
            label={
              <Button
                variant="outlined"
                startIcon={<AddIcon />}
                onClick={handleAddNewCard}
              >
                Add New Card
              </Button>
            }
          />
        </RadioGroup>
        {isAddingCard && (
          <Box mt={2}>
            <TextField
              label="Name"
              fullWidth
              margin="normal"
              value={newCard.name}
              onChange={(e) => setNewCard({ ...newCard, name: e.target.value })}
            />
            <TextField
              label="Card Number"
              fullWidth
              margin="normal"
              value={newCard.cardNumber}
              onChange={(e) =>
                setNewCard({ ...newCard, cardNumber: e.target.value })
              }
            />
            <Box display="flex">
              <TextField
                label="CVV"
                margin="normal"
                value={newCard.cvv}
                onChange={(e) =>
                  setNewCard({ ...newCard, cvv: e.target.value })
                }
              />
              <TextField
                label="Zipcode"
                margin="normal"
                value={newCard.zipcode}
                onChange={(e) =>
                  setNewCard({ ...newCard, zipcode: e.target.value })
                }
              />
            </Box>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleSaveCard(newCard)}
            >
              Save Card
            </Button>
          </Box>
        )}
        {isEditingCard && editedCard !== null && (
          <Box mt={2}>
            <TextField
              label="Name"
              fullWidth
              margin="normal"
              value={editedCard.name}
              onChange={(e) =>
                setEditedCard({ ...editedCard, name: e.target.value })
              }
            />
            <TextField
              label="Card Number"
              fullWidth
              margin="normal"
              value={editedCard.cardNumber}
              onChange={(e) =>
                setEditedCard({ ...editedCard, cardNumber: e.target.value })
              }
            />
            <Box display="flex">
              <TextField
                label="CVV"
                margin="normal"
                value={editedCard.cvv}
                onChange={(e) =>
                  setEditedCard({ ...editedCard, cvv: e.target.value })
                }
              />
              <TextField
                label="Zipcode"
                margin="normal"
                value={editedCard.zipcode}
                onChange={(e) =>
                  setEditedCard({ ...editedCard, zipcode: e.target.value })
                }
              />
            </Box>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleSaveEditedCard(editedCard)}
            >
              Save Changes
            </Button>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default PaymentSection;
