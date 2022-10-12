package finaltes.md4.service;

import finaltes.md4.model.City;
import finaltes.md4.repository.CityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
@Service
public class CityService implements ICityService{
    @Autowired
    private CityRepository cityRepository;
    @Override
    public Iterable findAll() {
        return cityRepository.findAll();
    }

    @Override
    public Optional findById(Long id) {
        return cityRepository.findById(id);
    }

    @Override
    public City save(City city) {
        return cityRepository.save(city);
    }

    @Override
    public void remove(Long id) {
        cityRepository.deleteById(id);
    }
}
