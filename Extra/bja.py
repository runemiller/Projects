import tkinter as tk
from tkinter import messagebox
import random

class BlackJackApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Blackjack Game")
        
        self.cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11]
        self.player_hand = [random.choice(self.cards), random.choice(self.cards)]
        self.dealer_hand = [random.choice(self.cards), random.choice(self.cards)]
        
        self.create_interface()
        
    def create_interface(self):
        self.label_player_hand = tk.Label(self.root, text="")
        self.label_player_hand.pack()
        
        self.label_dealer_hand = tk.Label(self.root, text="")
        self.label_dealer_hand.pack()
        
        self.button_hit = tk.Button(self.root, text="Hit", command=self.hit)
        self.button_hit.pack()
        
        self.button_stand = tk.Button(self.root, text="Stand", command=self.stand)
        self.button_stand.pack()
        
        self.display_hand()
        
    def display_hand(self):
        self.label_player_hand.config(text=f"Player's Hand: {', '.join(map(str, self.player_hand))} ({self.calculate_hand_value(self.player_hand)})")
        self.label_dealer_hand.config(text=f"Dealer's Hand: {self.dealer_hand[0]}, *")
    
    def hit(self):
        self.player_hand.append(random.choice(self.cards))
        self.display_hand()
        
        if self.calculate_hand_value(self.player_hand) == 21:
            messagebox.showinfo("Blackjack", "Blackjack! You win")
            self.restart_game()
        elif self.calculate_hand_value(self.player_hand) > 21:
            messagebox.showinfo("Bust", "You've busted! You lose")
            self.restart_game()
    
    def stand(self):
        while self.calculate_hand_value(self.dealer_hand) < 17:
            self.dealer_hand.append(random.choice(self.cards))
            
        self.display_hand()
        
        if self.calculate_hand_value(self.dealer_hand) > 21 or self.calculate_hand_value(self.dealer_hand) > self.calculate_hand_value(self.dealer_hand):
            messagebox.showinfo("Win", "You win")
        elif self.calculate_hand_value(self.player_hand) == self.calculate_hand_value(self.dealer_hand):
            messagebox.showinfo("Tie", "It's a tie")
        else:
            messagebox.showinfo("Loss", "You lose")
            
        self.restart_game()
        
    def calculate_hand_value(self, hand):
        hand_value = sum(hand)
        if 11 in hand and hand_value > 21:
            hand.remove(11)
            hand.append(1)
        return sum(hand)
    
    def restart_game(self):
        self.player_hand = [random.choice(self.cards), random.choice(self.cards)]
        self.dealer_hand = [random.choice(self.cards), random.choice(self.cards)]
        self.display_hand()
        
if __name__ == "__main__":
    root = tk.Tk()
    app = BlackJackApp(root)
    root.mainloop()