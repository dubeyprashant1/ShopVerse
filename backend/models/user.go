package models

type User struct {
	ID       string   `gorm:"primaryKey"`
	Name     string
	Email    string `gorm:"unique"`
	Password string
}
