from utils.DateFormat import DateFormat

class Movie():
    def __init__(self,id=None,name=None,duration=None,released=None) -> None:
        self.id = id
        self.name = name
        self.duration = duration
        self.released = released
    def to_JSON(self):
        return{
            'id':self.id,
            'name':self.name,
            'duration':self.duration,
            'released': self.released
        }