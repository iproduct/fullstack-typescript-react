class Coordinates:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def showCoordinates(self):
        print("Coordintes are " + str(self.x) + ' and ' + str(self.y))

    def returnX(self):
        return(int(self.x))

    def returnY(self):
        return(int(self.y))


coor_arr = []
n=0
while True:
    inp = int(input("1-Enter point coordinates, 2-Calculate polygon's area, any other number to end program"))
    if inp == 1:
        x = int(input('enter x'))
        y = int(input('enter y'))
        point = Coordinates(x, y)
        coor_arr.append(point)
        point.showCoordinates()
    elif inp == 2:
        for i in range(len(coor_arr)):
            z=coor_arr[i].returnX()*coor_arr[i-1].returnY()-coor_arr[i-1].returnX()*coor_arr[i].returnY()
            n=n+z
        print(abs(n/2))
    else:
        print('Program ended')
        break
